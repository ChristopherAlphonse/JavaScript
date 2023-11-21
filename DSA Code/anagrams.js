function isAnagram(items1, items2) {
	if (items1.length !== items2.length) {
		return false;
	}

	const result = {};

	for (let i = 0; i < items1.length; i++) {
		let value = items1[i];

		result[value] = result[value] ? (result[value] += 1) : 1;
	}

	for (let index = 0; index < items2.length; index++) {
		let theValue = items2[index];

		if (!result[theValue]) {
			return false;
		}

		result[theValue]--;
	}

	return true;
}

let print = console.log;
