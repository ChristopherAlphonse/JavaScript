/*
Write a function that accepts two arrays, and return true if every value in the array has a corresponding value squared in the target array
 */

function same(arr, target) {
  if (arr.length !== target.length) return false;

  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);

  let storeArr = [];
  let storeTarget = [];

  for (let value of arr) {
    storeArr.push(value * value);
  }
  for (let index of target) {
    storeTarget.push(index);
  }

  for (let i = 0; i < storeTarget.length; i++) {
    if (storeArr[i] !== storeTarget[i]) {
      return false;
    }
  }
  return true;
}
// ^ O(n log n), space: O(n) ^

//REFACTOR

function same2(arr, target) {
  if (arr.length !== target.length) return false;

  const frequencyCounter = {};

  for (let value of arr) {
    frequencyCounter[value ** 2] = (frequencyCounter[value ** 2] || 0) + 1;

    console.log(frequencyCounter);
  }

  for (let v of target) {
    if (!frequencyCounter[v] || frequencyCounter[v] === 0) {
      return false;
    }
    frequencyCounter[v]--;
  }

  return true;
}

// ^ O(n) time & space ^

console.log(same2([1, 2, 3], [4, 1, 9])); //toBe(true)
// console.log(same([1, 2, 3], 1, 9)); //toBe false
// console.log(same([1, 2, 1], 4, 4, 1)); //toBe() false not same
// console.log(same([1, 2, 3], [])); //toBe false not same length
// console.log(same2([1, 2, 3], [4, 1, 9])); //toBe(true)
// console.log(same2([1, 2, 3], 1, 9)); //toBe false
// console.log(same2([1, 2, 1], 4, 4, 1)); //toBe() false not same
// console.log(same2([1, 2, 3], [])); //toBe false not same length
