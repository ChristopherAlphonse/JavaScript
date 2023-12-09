/*
write a function which accepts an array of integer and a number called n, the function should calculate the max sum of n

example: arr = [ 1,2,3] n=2   return 2 integer that is the highest sum 
example: arr = [ 1,2,3] n=4   return 4 integer that is the highest sum 

windows length = n
   */

function maxSubArray(arr, n) {
  if (arr.length !== n.length) null;

  let result = 0;
  let current = 0;

  for (let i = 0; i < n; i++) {
    result += arr[i];
  }
  current = result;

  for (let i = n; i < arr.length; i++) {
    current = current - arr[i - n] + arr[i];

    result = Math.max(current, result);
  }

  return result;
}

console.log(maxSubArray([1, 2, 3, 2, 8, 1, 5], 2));
console.log(maxSubArray([1, 2, 3, 2, 8, 1, 5], 4));
console.log(maxSubArray([4, 2, 4, 5, 5, 67, 43, 32, 65, 6], 2));
console.log(maxSubArray([], 4));
