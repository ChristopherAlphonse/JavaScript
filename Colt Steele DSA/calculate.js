function cal(n) {
	return (n * (n + 1)) / 2;
}
console.log('cal value is ' + cal(5));

// or

function calculate(n) {
	let x = 0;
	for (let i = 0; i <= n; i++) {
		x += n;
	}

	return x / 2;
}
console.log(calculate(5));
