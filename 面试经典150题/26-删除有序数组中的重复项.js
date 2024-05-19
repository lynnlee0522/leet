var removeDuplicates = function (nums) {
    let length = 0;
    for (let i = 0, j = 0; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            nums[++j] = nums[i];

        }
        length = j
    }
    nums.length = length + 1;
};
