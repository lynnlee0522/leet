function twoSum(nums: number[], target: number): number[] {
  const sumMap = new Map();
  let result: number[] = [];

  nums.forEach((num1, index1) => {
    const num2 = target - num1;

    // 如果没找到
    if (!sumMap.has(num2)) {
      sumMap.set(num1, index1);
    } else {
      result = [index1, sumMap.get(num2)];
    }
  });

  return result;
}
