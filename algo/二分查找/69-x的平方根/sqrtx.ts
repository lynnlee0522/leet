function mySqrt(x: number): number {
  let start = 0;
  let end = x;

  while (start <= end) {
    let mid = start + ((end - start) >> 1);

    const result = mid * mid;
    if (result === x) {
      return mid;
    } else if (result > x) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return end;
}
