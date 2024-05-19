function findContentChildren(g: number[], s: number[]): number {
  const children = g.sort((a, b) => a - b);
  const cookie = s.sort((a, b) => a - b);

  let result = 0;

  let cookieIdx = cookie.length - 1;

  for (let i = children.length - 1; i >= 0; i--) {
    if (cookieIdx > 0 && cookie[cookieIdx] >= children[i]) {
      result++;
      cookieIdx--;
    }
  }

  return result;
}
