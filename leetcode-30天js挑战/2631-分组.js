/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const arr = this;
  const obj = {};

  arr.forEach((item) => {
    const result = fn(item);
    if (!obj[result]) {
      obj[result] = [item];
    } else {
      obj[result].push(item);
    }
  });

  return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
