function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    arr[i] !== arr[j];
  }
}

// Test cases
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // Output: 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // Output: 7
console.log(countUniqueValues([])); // Output: 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // Output: 4
