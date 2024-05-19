/*
考点：
    1. 字符串分割 split
*/

const validV4 = (queryIP: string) => {
  const ipArr = queryIP.split(".");
  // 判断数组长度
  if (ipArr.length !== 4) return false;
  let validFlag = true;
  for (let i = 0; i < ipArr.length; i++) {
    // IPv4 地址内的数不会以 0 开头
    // 为了防止Number（1e1）= 10的情况
    const reg = /(^([1-9]{1}[0-9]{0,2})$)|(^0$)/g;
    if (!reg.test(ipArr[i])) {
      validFlag = false;
      return;
    }
    
    // 范围为0 - 255
    const validNum = Number(ipArr[i]);
    if (!(validNum >= 0) || !(validNum < 256)) {
      validFlag = false;
    }
  }
  return validFlag;
};

const validV6 = (queryIP: string) => {
  const ipArr = queryIP.split(":");
  // 判断数组长度
  if (ipArr.length !== 8) return false;
  let validFlag = true;
  for (let i = 0; i < ipArr.length; i++) {
    // 不能因为某个组的值为 0，而使用一个空的组，以至于出现 (::) 的情况
    if (ipArr[i].length === 0) {
      validFlag = false;
    }
    // 在 IPv6 地址中，多余的 0 也是不被允许的
    // 这个条件在测试用例中又被取消掉了，傻逼测试用例
    // if (ipArr[i][0] === "0" && ipArr[i][1] === "0") {
    //   validFlag = false;
    // }
    // 用正则检查每一组数据
    const reg = /^[0-9a-fA-F]{1,4}$/g;
    if (!reg.test(ipArr[i])) {
      validFlag = false;
    }
  }

  return validFlag;
};

function validIPAddress(queryIP: string): string {
  if (validV4(queryIP)) {
    return "IPv4";
  } else if (validV6(queryIP)) {
    return "IPv6";
  } else {
    return "Neither";
  }
}
