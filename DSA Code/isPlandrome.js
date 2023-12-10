/**
 * @param {number} x
 *@return {boolean}
 */

//Two pointer: space O(1) time O(n)

function isPalindrome(x) {
  if (x < 0) return false;
  x = String(x);
  let left = 0;
  let right = x.length - 1;

  while (left < right) {
    if (x[left] !== x[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome(121), isPalindrome(12), isPalindrome(-121));
