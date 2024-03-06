/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

   */

function sameFrequency(num, n) {
    num = String(num);
    n = String(n);
    if (num.length !== n.length) return false;

    let store = {};

    for (let index of num) {
        store[index] = (store[index] || 0) + 1;
    }

    for (let value of n) {
        if (!store[value] || store[value] === 0) {
            return false;
        }
        store[value]--;
    }

    return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
