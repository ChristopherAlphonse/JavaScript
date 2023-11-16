/*
function charCount(str) {
	// make object to return at the end
	let result = {};
	// lowercase the entire string
	let lowerCaseString = str.toLowerCase();
	// loop over the str for each character
	for (let i = 0; i < str.length; i++) {
		// store the str index in val for readability
		let val = lowerCaseString[i];

		// filter val and only return a-z
		if (/[a-z]/.test(val)) {
			if (result[val] > 0) {
				// if result[val] is less than 0, increment by 1 else result[val]=1
				result[val]++;
			} else {
				result[val] = 1;
			}
		}
	}
	// return the stored object
	return result;
}

*/

function charCount(str) {
	let result = {};
	let lowerCaseString = str.toLowerCase();
	for (let char of lowerCaseString) {
		if (/[a-z]/.test(char)) {
			result[char] = result[char] > 0 ? result[char] + 1 : 1;
		}
	}

	return result;
}

console.log(charCount('H6456546e^&*llo Wor^*l^%^&%&%(d! $^&**)*()'));

/*  
Time: O(n)
Space: O(n)
*/
