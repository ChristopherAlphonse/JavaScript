/*
Given two strings, write a function to find out if the target is an anagram
 */

function validAnagram(n, target) {
  if (n.length !== target.length) return false;

  let storeValues = {};

  for (let items of n) {
    storeValues[items] = (storeValues[items] || 0) + 1;
  }

  for (let index of target) {
    if (!storeValues[index]) {
      return false;
    }
    storeValues[index]--;
  }

  return true;
}

// Test cases
// console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
// console.log(validAnagram("anagram", "nagaram")); // true
// console.log(validAnagram("rat", "car")); // false
// console.log(validAnagram("awesome", "awesom")); // false
// console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
// console.log(validAnagram("qwerty", "qeywrt")); // true
// console.log(validAnagram("texttwisttime", "timetwisttext")); // true

// Time 0(n) and Space 0(1)
