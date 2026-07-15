export const EVENT_TREND_IDS = [
  "deals",
  "festival",
  "concert",
  "music",
] as const;

export type EventTrendId = (typeof EVENT_TREND_IDS)[number];

export interface TrendingEvent {
  id: string;
  title: string;
  meta: string;
  href: string;
}

export interface EventTrendGroup {
  id: EventTrendId;
  label: string;
  hashtag: string;
  eyebrow: string;
  events: [TrendingEvent, TrendingEvent, TrendingEvent];
}
