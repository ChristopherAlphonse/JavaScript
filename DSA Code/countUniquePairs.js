let arr = [1, 1, 1, 1, 2];
let arr2 = [];
let arr3 = [-2, -6, -5, 1, 8, 2, 9, 4, 6, 3, -2, -6];

function fn(n) {
  let newSet = new Set(n);

  return newSet;
}

console.log(fn(arr));
console.log(fn(arr2));
console.log(fn(arr3));

//time and space complexity is 0(n)
