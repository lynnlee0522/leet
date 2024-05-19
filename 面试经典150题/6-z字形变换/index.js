/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const r = numRows;
    const n = s.length;
    // 每个周期消化的元素
    const t = 2 * r - 2;
    const arr = [];

    if (r === 1 || r > n) {
        return s
    }

    // 确定行数
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < n - i; j += t) {
            arr.push(s[j + i]); // 每行的第一个数

            if (i > 0 && i < r - 1 && j + t - i < n) {
                arr.push(s[j + t - i]);
            }
        }
    }

    const str = arr.join('')

    return str
};