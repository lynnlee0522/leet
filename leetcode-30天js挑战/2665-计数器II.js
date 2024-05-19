var createCounter = function (init) {
  const value = init;
  const obj = {
    increment: () => {
      value++;
      return value;
    },
    decrement: () => {
      value--;
      return value;
    },
    reset: () => {
      value = init;
      return value;
    },
  };

  return obj;
};
