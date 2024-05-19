function findMinArrowShots(points: number[][]): number {
  const sortedPoints = points.sort((a, b) => {
    return a[1] - b[1];
  });

  let ans = 1;
  let right = points[0][1];
  for (let i = 1; i < sortedPoints.length; i++) {
    if (sortedPoints[i][0] > right) {
      ans++;
      right = sortedPoints[i][1];
    }
  }

  return ans;
}
