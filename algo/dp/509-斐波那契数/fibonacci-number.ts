function fib(n: number): number {
  if (n <= 1) return n;

  let result = 1,
    p = 0,
    q = 1;

  for (let i = 2; i <= n; i++) {
    result = p + q;
    p = q;
    q = result;
  }

  return result;
}
