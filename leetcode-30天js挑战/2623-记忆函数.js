/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const map = new Map();
  return function (...args) {
    if (!map.get(args)) {
      const result = fn.apply(this, args);
      map.set(JSON.stringify(args), result);
      return result;
    } else {
      return map.get(JSON.stringify(args));
    }
  };
}

const fn = (a, b) => {
  return a + b;
};

const memoFn = memoize(fn);
console.log(memoFn(2, 3));
console.log(memoFn());
console.log(memoFn());
