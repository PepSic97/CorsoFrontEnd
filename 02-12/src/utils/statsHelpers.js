export function computeStats(games) {
  const totalHours = games.reduce(
    (s, g) => s + (Number(g.hoursPlayed) || 0),
    0
  );
  const counts = games.reduce((acc, g) => {
    acc[g.status] = (acc[g.status] || 0) + 1;
    return acc;
  }, {});
  const avgRating = games.length
    ? games.reduce((s, g) => s + (Number(g.rating) || 0), 0) / games.length
    : 0;
  const platformCounts = games.reduce((acc, g) => {
    acc[g.platform] = (acc[g.platform] || 0) + 1;
    return acc;
  }, {});
  const topPlatform = Object.keys(platformCounts).length
    ? Object.keys(platformCounts).reduce((a, b) =>
        platformCounts[a] >= platformCounts[b] ? a : b
      )
    : null;

  return {
    totalHours,
    counts,
    avgRating,
    topPlatform,
  };
}
