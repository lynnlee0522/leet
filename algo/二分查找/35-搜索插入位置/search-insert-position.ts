function searchInsert(nums: number[], target: number): number {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = start + ((end - start) >> 1);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
}

/*
不需要ans变量，最后直接返回left就可以了，
根据if的判断条件，left左边的值一直保持小于target，
right右边的值一直保持大于等于target，而且left最终一定等于right+1，
这么一来，循环结束后，在left和right之间画一条竖线，恰好可以把数组分为两部分：
left左边的部分和right右边的部分，而且left左边的部分全部小于target，并以right结尾；
right右边的部分全部大于等于target，并以left为首。所以最终答案一定在left的位置。 */
