let print = console.log;

function cal(n) {
	return (n * (n + 1)) / 2;
}

/*
This operation (function cal(n)) is O(1) because it always takes 3 steps to solve the problem.
*/

function calculate(n) {
	let x = 0;
	for (let i = 1; i <= n; i++) {
		x += i;
	}

	return x;
}

/*
Number of operations (function calculate(n)) is now bound by the size of n, making it O(n).
*/

// Log the results
print(cal(1));
print(calculate(2));
