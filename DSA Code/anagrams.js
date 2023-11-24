// 0(n^2)

// function validAnagram(items1, items2) {
//   if (items1.length !== items2.length) {
//     return false;
//   }

//   const set1 = new Set(items1);
//   const set2 = new Set(items2);

//   if (set1.size !==d set2.size) {
//     return false;
//   }

//   for (const item of set1) {
//     const count1 = [...items1].filter((el) => el === item).length;
//     const count2 = [...items2].filter((el) => el === item).length;

//     if (count1 !== count2) {
//       return false;
//     }
//   }

//   return true;
// }

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
