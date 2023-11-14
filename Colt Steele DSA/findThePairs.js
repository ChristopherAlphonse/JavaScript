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
