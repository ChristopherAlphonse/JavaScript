const arr1 = [0, 1, 2, 0, 1, 2];

function printAllPairs(n) {
  let pairs = [];
  let left = n.length - 1;

  for (let i = 0; i < left; i++) {
    for (let j = i + 1; j < n.length; j++) {
      pairs.push([n[i], n[j]]);
    }
    return pairs;
  }
}

console.log(printAllPairs(arr1));

/*
Time: 0(n)
Space: 0(1) because the function doesn't use any data structures or variables whose space requirements increase with the size of the input
*/
