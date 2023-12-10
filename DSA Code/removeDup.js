/**
 * @param {string} n
 * @return {string}
 */

// Stack DSA- FIFO, time O(n) space O(1)

function removeDuplicate(n) {
  let stack = [];
  for (let index of n) {
    let right = stack.length - 1;
    if (stack[right] === index) {
      stack.pop();
    } else {
      stack.push(index);
    }
  }
  return stack.join("");
}

console.log(removeDuplicate("abbaca"), removeDuplicate("azxxyz"));
