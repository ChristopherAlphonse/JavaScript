let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const sum = arr.reduce((acc, curr) => {
  const key = curr[0];
  const value = curr[1];
  g;
  const r = curr[2];
  acc[key] = r;
  acc[value] = r;
  acc[r] = value;
  acc[key] = value;
  return acc;
}, {});

console.log(sum);
