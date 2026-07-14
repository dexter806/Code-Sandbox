// /api/ratings.js
// Returns every match's current average + vote count in one shot, e.g.:
// { "night1-m0": { "avg": 4.25, "count": 3 }, "night1-m1": { "avg": 3.0, "count": 1 }, ... }
// The frontend calls this once on page load to populate the shared ratings.

export default async function handler(req, res) {
  const base = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;

  try {
    const readRes = await fetch(`${base}/rest/v1/ratings?select=match_id,stars`, {
      headers: {
        "apikey": key,
        "Authorization": `Bearer ${key}`,
      },
    });

    if (!readRes.ok) throw new Error("Failed to read ratings");

    const rows = await readRes.json();
    const grouped = {};

    rows.forEach(({ match_id, stars }) => {
      if (!grouped[match_id]) grouped[match_id] = { total: 0, count: 0 };
      grouped[match_id].total += Number(stars);
      grouped[match_id].count += 1;
    });

    const result = {};
    Object.entries(grouped).forEach(([matchId, { total, count }]) => {
      result[matchId] = { avg: total / count, count };
    });

    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Something went wrong loading ratings" });
  }
}
