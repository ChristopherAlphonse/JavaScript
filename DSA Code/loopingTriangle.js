// Write a loop that run seven times and return a triangle : Eloquent JS page 37

function loopTriangle(n) {
	let result = '';
	for (let i = 0; i < n; i++) {
		result += '#';
		console.log(result);
	}
	return result;
}

console.log(loopTriangle(7));

// Time: o(n), Space: o(n)
