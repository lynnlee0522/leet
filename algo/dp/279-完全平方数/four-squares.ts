function numSquares(n: number): number {
  if (isPerfectSquares(n)) {
    return 1;
  }

  if (check4(n)) {
    return 4;
  }

  let ans = 3;

  for (let i = 0; i * i <= n; i++) {
    let j = n - i * i;

    if (isPerfectSquares(j)) {
      return 2;
    }
  }

  return ans;
}

const isPerfectSquares = (x) => {
  const y = Math.floor(Math.sqrt(x));

  return y * y === x;
};

// 当 n = 4^k \times (8m+7)n=4^k×(8m+7) 时，nn 只能被表示为四个正整数的平方和
const check4 = (x) => {
  while (x % 4 === 0) {
    x /= 4;
  }

  return x % 8 === 7;
};
