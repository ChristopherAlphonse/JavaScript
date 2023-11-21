function bitMasking() {
	let mask = new Uint8Array([0x0f]);
	let value = new Uint8Array([0x55]);
	return mask[0] & value[0];
}

console.log(bitMasking());
