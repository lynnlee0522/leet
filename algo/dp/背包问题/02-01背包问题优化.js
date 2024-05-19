const goodsWight = [1, 2];
const goodsValue = [2, 3];

const knapsack = (n) => {
  var arr = new Array(n + 1).fill(0);

  for (let i = 0; i < goodsWight.length; i++) {
    for (let j = n; j >= goodsWight[i]; j--) {
      // 如果当前背包容量 小于 物品重量
      // 转移方程 f[j] = max(f[j], f[j - w] + v)
      arr[j] = Math.max(arr[j], arr[j - goodsWight[i]] + goodsValue[i]);
    }
  }

  console.log("--arr--", arr[n]);
};

console.log(knapsack(3));
