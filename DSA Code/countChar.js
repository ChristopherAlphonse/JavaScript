function countBs(char, target = "") {
  let charString = String(char).toLowerCase();

  let count = 0;
  for (let i = 0; i <= charString.length; i++) {
    if (charString[i] === charString[0]) {
      count++;
    }
  }
  return count;
}

function countChar(n, t) {
  return countBs(n, t);
}

console.log(countBs("00010001000101010101011010"));
// → 2
console.log(countChar("kakkerlak", "kk"));
// → 4
