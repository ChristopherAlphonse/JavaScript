/*
   You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let currentMin = prices[0];
  //current max is at zero initially because if a profit cannot be found return 0
  let currentMax = 0;

  for (let i = 0; i < prices.length; i++) {
    currentMin = Math.min(prices[i], currentMin);

    //  console.log(currentMin);

    currentMax = Math.max(currentMax, prices[i] - currentMin);
  }

  return currentMax;
}

let prices = [7, 1, 5, 3, 6, 4];

// dynamic programming
console.log(maxProfit(prices));
//time 0(n) space O(1)
