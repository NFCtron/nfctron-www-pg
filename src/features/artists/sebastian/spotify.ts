const SPOTIFY_ARTIST_ID = "1ucovYZ0AOZZ0ZIfjhYFfQ";
const SPOTIFY_ARTIST_URL = `https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`;

export interface SebastianSpotifyData {
  artistName: string;
  artistUrl: string;
  monthlyListeners: number;
  toulavaStreams: number;
  youtubeViews: number;
  source: "spotify-api" | "fallback";
}

function metricFromEnv(name: string, fallback: number) {
  const value = Number(process.env[name]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

const fallbackData: SebastianSpotifyData = {
  artistName: "Sebastian",
  artistUrl: SPOTIFY_ARTIST_URL,
  monthlyListeners: metricFromEnv(
    "SPOTIFY_SEBASTIAN_MONTHLY_LISTENERS",
    279_777,
  ),
  toulavaStreams: metricFromEnv(
    "SPOTIFY_SEBASTIAN_TOULAVA_STREAMS",
    12_289_981,
  ),
  youtubeViews: metricFromEnv("YOUTUBE_SEBASTIAN_TOULAVA_VIEWS", 37_000_000),
  source: "fallback",
};

async function getSpotifyAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  if (!clientId || !clientSecret) return null;

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64",
  );
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    next: { revalidate: 3_300 },
  });
  if (!response.ok) return null;

  const payload = (await response.json()) as { access_token?: string };
  return payload.access_token ?? null;
}

export async function getSebastianSpotifyData(): Promise<SebastianSpotifyData> {
  try {
    const accessToken = await getSpotifyAccessToken();
    if (!accessToken) return fallbackData;

    const response = await fetch(
      `https://api.spotify.com/v1/artists/${SPOTIFY_ARTIST_ID}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        next: { revalidate: 3_600 },
      },
    );
    if (!response.ok) return fallbackData;

    const artist = (await response.json()) as {
      name?: string;
      external_urls?: { spotify?: string };
    };
    return {
      ...fallbackData,
      artistName: artist.name ?? fallbackData.artistName,
      artistUrl: artist.external_urls?.spotify ?? fallbackData.artistUrl,
      source: "spotify-api",
    };
  } catch {
    return fallbackData;
  }
}
