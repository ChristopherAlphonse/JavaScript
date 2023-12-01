const numArray = [1, 6, 453, 75, 7, 55, 775, 5, 67, 56, 56, 24, 3456, 7678, 54];

const fnCompare = (a, b) => {
  return a - b;
};

numArray.sort(fnCompare);

console.log(numArray);
