import { staticEventTrendGroups } from "./static-data";
import { EVENT_TREND_IDS } from "./types";
import type { EventTrendGroup, EventTrendId, TrendingEvent } from "./types";

const TRENDS_API_URL = process.env.NFCTRON_TRENDS_API_URL;
const REVALIDATE_SECONDS = 15 * 60;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isHttpsUrl(value: unknown): value is string {
  if (!isNonEmptyString(value)) return false;
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

function isTrendingEvent(value: unknown): value is TrendingEvent {
  if (!value || typeof value !== "object") return false;
  const event = value as Record<string, unknown>;
  return (
    isNonEmptyString(event.id) &&
    isNonEmptyString(event.title) &&
    isNonEmptyString(event.meta) &&
    isHttpsUrl(event.href)
  );
}

function isTrendId(value: unknown): value is EventTrendId {
  return EVENT_TREND_IDS.includes(value as EventTrendId);
}

function parseTrendGroups(value: unknown): EventTrendGroup[] | null {
  if (!Array.isArray(value)) return null;

  const groups = value.flatMap((item): EventTrendGroup[] => {
    if (!item || typeof item !== "object") return [];
    const group = item as Record<string, unknown>;
    if (
      !isTrendId(group.id) ||
      !isNonEmptyString(group.label) ||
      !isNonEmptyString(group.hashtag) ||
      !isNonEmptyString(group.eyebrow) ||
      !Array.isArray(group.events) ||
      group.events.length < 3 ||
      !group.events.slice(0, 3).every(isTrendingEvent)
    ) {
      return [];
    }

    return [
      {
        id: group.id,
        label: group.label,
        hashtag: group.hashtag,
        eyebrow: group.eyebrow,
        events: [group.events[0], group.events[1], group.events[2]],
      },
    ];
  });

  const groupsById = new Map(groups.map((group) => [group.id, group]));
  if (groupsById.size !== EVENT_TREND_IDS.length) return null;

  return EVENT_TREND_IDS.map((id) => groupsById.get(id)).filter(
    (group): group is EventTrendGroup => Boolean(group),
  );
}

export async function getEventTrendGroups(): Promise<EventTrendGroup[]> {
  if (!TRENDS_API_URL) return staticEventTrendGroups;

  try {
    const response = await fetch(TRENDS_API_URL, {
      headers: { Accept: "application/json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!response.ok) return staticEventTrendGroups;

    return parseTrendGroups(await response.json()) ?? staticEventTrendGroups;
  } catch {
    return staticEventTrendGroups;
  }
}
