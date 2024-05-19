var rotate = function (nums, k) {
  while (k > 0) {
    const target = nums[nums.length - 1];
    nums = [target].concat(nums);
    nums.length--;
    k--;
  }

  return nums;
};

// (var rotate = function (nums, k) {
//   const arr = nums.splice(-k);

//   console.log("--1---", arr);

//   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     const temp = arr[i];
//     // 判断 如果是奇数
//     if (arr.length % 2) {
//       arr[i] = arr[i + Math.floor(arr.length / 2) + 1];
//       arr[i + Math.floor(arr.length / 2) + 1] = temp;
//     } else {
//       arr[i] = arr[i + arr.length / 2];
//       arr[i + arr.length / 2] = temp;
//     }
//   }

//   return arr.concat(nums);
// };)

const res = rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.log("--res---", res);
