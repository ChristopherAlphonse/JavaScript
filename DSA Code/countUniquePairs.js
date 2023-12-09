/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted
  */

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let left = 0;

  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }
  return (left += 1);
}

// Test cases
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // Output: 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // Output: 7
console.log(countUniqueValues([])); // Output: 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // Output: 4
