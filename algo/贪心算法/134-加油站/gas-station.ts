function canCompleteCircuit(gas: number[], cost: number[]): number {
  const len = gas.length;

  for (let i = 0; i < len; ) {
    let gasTotal = 0,
      costTotal = 0;

    let cnt = 0;

    for (; cnt < len; ) {
      const j = (i + cnt) % len;
      gasTotal += gasTotal[j];
      costTotal += costTotal[j];

      if (costTotal > gasTotal) {
        break;
      }

      cnt++;
    }

    if (cnt === len) {
      return i;
    } else {
      return i + cnt + 1;
    }
  }
  return -1;
}

canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
