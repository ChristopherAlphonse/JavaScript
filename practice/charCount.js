function charCount(str) {
  let result = {};
  let lowerCaseString = str.toLowerCase();
  for (let char of lowerCaseString) {
    if (/[a-z]/.test(char)) {
      result[char] = result[char] > 0 ? result[char] + 1 : 1;
    }
  }

  return result;
}

console.log(charCount("H6456546e^&*llo Wor^*l^%^&%&%(d! $^&**)*()"));

/*  
Time: O(n)
Space: O(n)
*/
