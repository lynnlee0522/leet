var lengthOfLastWord = function (s) {
    // 记住这个正则
    const arr = s.trim().split(/\s+/);
    let result = arr[arr.length - 1].length
    return result
};