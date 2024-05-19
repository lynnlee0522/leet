/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let fn = functions.pop();
    let result = fn(x);
    while (functions.length) {
      let fn = functions.pop();
      result = fn(result);
    }
    return result;
  };
};

const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];

const fn = compose(functions);
console.log(fn(4));
