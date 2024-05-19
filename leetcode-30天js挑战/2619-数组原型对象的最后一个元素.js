/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  const arr = this;
  if (!arr.length) {
    return -1;
  } else {
    return arr.pop();
  }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
