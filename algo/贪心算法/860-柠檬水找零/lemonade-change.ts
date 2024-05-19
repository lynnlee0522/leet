function lemonadeChange(bills: number[]): boolean {
  let five = 0,
    ten = 0;

  for (let i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5:
        five++;
        break;
      case 10:
        if (!five) {
          return false;
        } else {
          five--;
          ten++;
          break;
        }
      case 20:
        if (five && ten) {
          five--;
          ten--;
          break;
        } else if (five >= 3) {
          five -= 3;
          break;
        } else {
          return false;
        }
      default:
        break;
    }
  }

  return true;
}
