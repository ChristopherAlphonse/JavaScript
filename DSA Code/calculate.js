let print = console.log;

function calculate(n) {
	let x = 0;
	for (let i = 1; i <= n; i++) {
		x += i;
	}

	return x;
}

print(calculate(5));

// return 15

/* 
Time: O(n) 
Space: 0(1) */
