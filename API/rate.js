// /api/rate.js
// Receives one rating submission and upserts it into Supabase.
// "Upsert" = insert, or update in place if this voter already rated this match —
// that's what the unique(match_id, voter_id) constraint enables.
// Returns the fresh average + vote count for that match.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { matchId, voterId, stars } = req.body || {};

  if (!matchId || !voterId || typeof stars !== "number" || stars < 0 || stars > 5) {
    return res.status(400).json({ error: "Invalid rating payload" });
  }

  const base = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;

  try {
    // Upsert this voter's rating for this match
    const upsertRes = await fetch(`${base}/rest/v1/ratings?on_conflict=match_id,voter_id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": key,
        "Authorization": `Bearer ${key}`,
        "Prefer": "resolution=merge-duplicates",
      },
      body: JSON.stringify({ match_id: matchId, voter_id: voterId, stars }),
    });

    if (!upsertRes.ok) {
      const text = await upsertRes.text();
      throw new Error(`Supabase upsert failed: ${text}`);
    }

    // Pull every rating for this match to compute a fresh average
    const readRes = await fetch(
      `${base}/rest/v1/ratings?match_id=eq.${encodeURIComponent(matchId)}&select=stars`,
      {
        headers: {
          "apikey": key,
          "Authorization": `Bearer ${key}`,
        },
      }
    );
    const rows = await readRes.json();
    const count = rows.length;
    const avg = count ? rows.reduce((sum, r) => sum + Number(r.stars), 0) / count : 0;

    return res.status(200).json({ avg, count });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong saving your rating" });
  }
}
