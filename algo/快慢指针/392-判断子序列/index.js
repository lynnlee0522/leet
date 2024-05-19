/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s.length) {
    return true;
  }

  let index = 0;
  let subIndex = 0;

  while (index < t.length) {
    if (s[subIndex] === t[index]) {
      subIndex++;
      if (subIndex === s.length) {
        return true;
      }
    }
    index++;
  }

  return false;
};

isSubsequence("abc", "ahbgdc");
