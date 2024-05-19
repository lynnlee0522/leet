const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

const countedNames = names => {
  return names.reduce((acc, item) => {
    if (!acc[item]) {
      acc[item] = 1
    } else {
      acc[item] = acc[item] + 1
    }

    return acc;
  }, {})
}

console.log(countedNames(names))
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
