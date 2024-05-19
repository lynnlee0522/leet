// 这道题和453题完全一样
function numRescueBoats(people: number[], limit: number): number {
  const sortPeople = people.sort((a, b) => {
    return a - b;
  });

  let boat = 0;
  let j = sortPeople.length - 1;
  for (let i = 0; i <= j; boat++) {
    if (sortPeople[i] + sortPeople[j--] <= limit) {
      i++;
    }
  }
  return boat;
}
