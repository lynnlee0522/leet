var expect = function (val) {
  const value = val;
  const obj = {
    toBe: (num) => {
      if (num !== value) {
        return { error: "Not Equal" };
      } else {
        return { value: true };
      }
    },
    notToBe: (num) => {
      if (num !== value) {
        return { value: true };
      } else {
        return { error: "Equal" };
      }
    },
  };

  return obj;
};
