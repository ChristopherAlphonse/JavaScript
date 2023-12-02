function validAnagram(items1, items2) {
  if (items1.length !== items2.length) {
    return false;
  }

  const count = {};

  for (const char of items1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of items2) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }

  return true;
}

// Test cases
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true

// Time 0(n) and Space 0(1)
