let print = console.log;

function printAllPairs(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			print(i, j);
		}
		return i;
	}
}

print(printAllPairs(5));

/*
Time: 0(n)
Space: 0(1) because the function doesn't use any data structures or variables whose space requirements increase with the size of the input
*/
