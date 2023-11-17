function same(n, target) {
	// Check if arrays are of equal length
	if (n.length !== target.length) {
		return false;
	}

	// Loop through the first array
	for (let i = 0; i < n.length; i++) {
		// Check if the square of the current element in n exists in target
		const squared = Math.pow(n[i], 2);

		const val = target.indexOf(squared);

		// If the square is not found in target, return false
		if (val === -1) {
			return false;
		}

		// Remove the found element from target to avoid duplicate matches
		target.splice(val, 1);
	}

	// If all elements have been matched, return true
	return true;
}
let print = console.log;

print(same([1, 2, 3], [4, 1, 9])); // Should return true
print(same([1, 2, 3], [1, 9])); // Should return false
print(same([1, 2, 1], [4, 4, 1])); // should return false (must be the same frequency)
