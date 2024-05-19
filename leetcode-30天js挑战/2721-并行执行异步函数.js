/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    if (!functions.length) {
      resolve([]);
      return;
    }

    const result = [];
    let count = 0
    functions.forEach((fn, index) => {
      fn.apply(this).then(
        (res) => {
          result[index] = res;
          count++
          if (count === functions.length) {
            console.log("--result--");
            resolve(result);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
};

const functions = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
];

promiseAll(functions).then((res) => {
  console.log("--res--", res);
});
