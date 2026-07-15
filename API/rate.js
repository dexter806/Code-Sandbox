// /api/rate.js
// POST: receives one rating submission and upserts it into Supabase.
// "Upsert" = insert, or update in place if this voter already rated this match —
// that's what the unique(match_id, voter_id) constraint enables.
// DELETE: removes this voter's rating for a match entirely (reset).
// Both return the fresh average + vote count for that match.

export default async function handler(req, res) {
  const base = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;

  if (req.method === "POST") {
    const { matchId, voterId, stars } = req.body || {};

    if (!matchId || !voterId || typeof stars !== "number" || stars < 0 || stars > 5) {
      return res.status(400).json({ error: "Invalid rating payload" });
    }

    try {
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

      const { avg, count } = await fetchAggregate(base, key, matchId);
      return res.status(200).json({ avg, count });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Something went wrong saving your rating" });
    }
  }

  if (req.method === "DELETE") {
    const { matchId, voterId } = req.body || {};

    if (!matchId || !voterId) {
      return res.status(400).json({ error: "Missing matchId or voterId" });
    }

    try {
      const delRes = await fetch(
        `${base}/rest/v1/ratings?match_id=eq.${encodeURIComponent(matchId)}&voter_id=eq.${encodeURIComponent(voterId)}`,
        {
          method: "DELETE",
          headers: {
            "apikey": key,
            "Authorization": `Bearer ${key}`,
          },
        }
      );

      if (!delRes.ok) {
        const text = await delRes.text();
        throw new Error(`Supabase delete failed: ${text}`);
      }

      const { avg, count } = await fetchAggregate(base, key, matchId);
      return res.status(200).json({ avg, count });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Something went wrong clearing your rating" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}

async function fetchAggregate(base, key, matchId) {
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
  return { avg, count };
}
