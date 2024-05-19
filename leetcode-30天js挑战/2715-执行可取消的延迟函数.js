/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  let timer;

  timer = setTimeout(() => {
    return fn.apply(this, args);
  }, t);
  return () => {
    clearTimeout(timer);
  };
};

const fn = (x) => {
  return x * 5;
};
const args = [2];
const t = 20;

cancellable(fn, args, t);
