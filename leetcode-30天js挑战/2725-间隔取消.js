/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  fn.apply(this, args);
  const timer = setInterval(() => {
    fn.apply(this, args);
  }, t);

  return () => {
    clearInterval(timer);
  };
};
