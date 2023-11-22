// var yourself = {
// 	fibonacci: function (n) {
// 		if (n === 0 || n === 1) {
// 			return n;
// 		} else {
// 			return this.fibonacci(n - 1) + this.fibonacci(n - 2);
// 		}
// 	},
// };

// refactor
const yourself = {
	result: {},
	fibonacci: function (n) {
		if (n === 0 || n === 1) {
			return n;
		} else if (this.result[n]) {
			return this.result[n];
		} else {
			this.result[n] = this.fibonacci(n - 1) + this.fibonacci(n - 2);
			return this.result[n];
		}
	},
};

console.log(yourself.fibonacci(4));
