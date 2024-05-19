/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

var addTwoPromises = async function (promise1, promise2) {
  return new Promise((resolve, reject) => {
    const result = [];
    promise1.then((res) => {
      result.push(res);

      if (result.length === 2) {
        resolve(result[0] + result[1]);
      }
    });

    promise2.then((res) => {
      result.push(res);

      if (result.length === 2) {
        resolve(result[0] + result[1]);
      }
    });
  });
};
