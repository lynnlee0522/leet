/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let count = "";

  // 先排序
  const sortArr = strs.sort((a, b) => a.length - b.length);

  for (let i = 0; i < sortArr[0].length; i++) {
    const char = sortArr[0][i];
    let flag = true;
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        flag = false;
        break;
      }
    }

    if (flag) {
      count += char;
    } else {
      break;
    }
  }

  return count;
};
