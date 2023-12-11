function log(n) {
  if (n <= 1) {
    return 0;
  }

  n = Math.floor(n / 2);
  return 1 + log(n);
}

console.log(log(20));
