/*
 Write a program : 
 count 1 to 100, 
 divisible by 3 print "Fizz" 
 divisible by 5 and not 3 "Buzz"
 divisible by 5 and 3 "FizzBuzz"
 : Eloquent JS page 38
*/

function FizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz" + i);
    } else if (i % 3 == 0) {
      console.log("Fizz" + i);
    } else if (i % 5 == 0 && i % 3 != 0) {
      console.log("Buzz" + i);
    }
  }
  return 0;
}

FizzBuzz(10);

// Time: O(n), space: O(1)
