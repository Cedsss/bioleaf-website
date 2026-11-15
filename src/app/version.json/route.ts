import { MIN_SUPPORTED_VERSION, releases } from "@/data/releases";

// The BioLeaf app reads this to learn whether a newer version exists.
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const latest = releases[0];
  const origin = new URL(request.url).origin;
  const downloadUrl = !latest.file
    ? `${origin}/downloads`
    : latest.file.startsWith("http")
      ? latest.file
      : `${origin}${latest.file}`;

  return Response.json(
    {
      version: latest.version,
      minVersion: MIN_SUPPORTED_VERSION,
      releasedAt: latest.date,
      downloadUrl,
      notes: latest.notes,
      notesTl: latest.notesTl,
    },
    { headers: { "Cache-Control": "no-store", "Access-Control-Allow-Origin": "*" } },
  );
}
