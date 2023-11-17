function same(n, target) {
	if (n.length !== target.length) {
		return false;
	}

	for (let i = 0; i < n.length; i++) {
		const squared = Math.pow(n[i], 2);
		const val = target.indexOf(squared);

		if (val === -1) {
			return false;
		}

		target.splice(val, 1);
	}

	return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // Should return true
console.log(same([1, 2, 3], [1, 9])); // Should return false
console.log(same([1, 2, 1], [4, 4, 1])); // Should return false (must be the same frequency)

/*
Time: 0(n^2)
Space: 0(1)
*/

// hashMap solution:

// refactored
const Same = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		return false;
	}

	let freqCounter = {};
	let freqCounter2 = {};
	for (let i of arr1) {
		freqCounter[i] = (freqCounter[i] || 0) + 1;
	}
	for (let j of arr2) {
		freqCounter2[j] = (freqCounter2[j] || 0) + 1;
	}

	for (let key in freqCounter) {
		let squaredKey = key ** 2;
		if (!(squaredKey in freqCounter2)) {
			return false;
		}
		if (freqCounter2[squaredKey] !== freqCounter[key]) {
			return false;
		}
	}

	return true;
};

/*
Time: 0(n)
Space: 0(n)
*/
