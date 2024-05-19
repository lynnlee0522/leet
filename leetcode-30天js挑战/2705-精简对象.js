/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  // 如果是基本类型
  const dfs = (obj) => {
    if (!obj) {
      return false;
    }

    if (typeof obj !== "object") {
      return obj;
    }

    // 如果是数组
    let result;
    if (Array.isArray(obj)) {
      result = [];
      for (let i = 0; i < obj.length; i++) {
        const res = dfs(obj[i]);
        if (res) {
          result.push(res);
        }
      }
    } else {
      result = {};
      for (let key in obj) {
        const res = dfs(obj[key]);
        if (res) {
          result[key] = res;
        }
      }
    }

    return result;
  };

  return dfs(obj);
};

compactObject({ a: null, b: [false, 1] });
