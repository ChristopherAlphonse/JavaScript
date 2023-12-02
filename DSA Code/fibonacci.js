var yourself = {
  fibonacci: function (n) {
    if (n === 0 || n === 1) {
      return n;
    } else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  },
};

// refactor
function fibonacci(n) {
  let fib = [];
  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

console.log(fibonacci(10));

// console.log(fibonacci(10));
