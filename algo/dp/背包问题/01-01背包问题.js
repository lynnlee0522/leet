const goodsWight = [1, 2];
const goodsValue = [2, 3];

const knapsack = (n) => {
  var arr = Array.from({ length: goodsWight.length + 1 }, () => {
    return new Array(n + 1).fill(0);
  });

  for (let i = 1; i <= goodsWight.length; i++) {
    for (let j = 1; j <= n; j++) {
      // 如果该产品重量大于背包容量,则返回没有该产品时背包里的最大价值
      if (goodsWight[i - 1] > j) {
        arr[i][j] = arr[i - 1][j];
      } else {
        // 加上该物品求值，
        data1 = goodsValue[i - 1] + arr[i - 1][j - goodsWight[i - 1]];
        //  不加该物品求值，取最大值
        data2 = arr[i - 1][j];
        arr[i][j] = Math.max(data1, data2);
      }
    }
  }

  return arr[goodsWight.length][n];
};

console.log(knapsack(3));
