/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // 从第0号加油站开始
  for (let i = 0; i < gas.length; ) {
    let curr = 0;
    let j = i;
    while (curr >= 0) {
      // 得到该节点汽油，并尝试向下一个节点
      curr += gas[j % cost.length];
      curr -= cost[j % cost.length];
      j++;
      if (j % cost.length === i + 1) {
        return i;
      }
    }

    i = j;
  }

  return -1;
};

canCompleteCircuit([2, 3, 4], [3, 4, 3]);
