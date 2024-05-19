function eraseOverlapIntervals(intervals: number[][]): number {
  if (!intervals.length) return 0;

  let sortedIntervals = intervals.sort((a, b) => a[1] - b[1]);

  let ans = 0;
  let right = sortedIntervals[0][1];
  const len = sortedIntervals.length;

  for (let i = 1; i < sortedIntervals.length; i++) {
    if (sortedIntervals[i][0] >= right) {
      ans++;
      right = sortedIntervals[i][1];
    }
  }

  return len - ans;
}
