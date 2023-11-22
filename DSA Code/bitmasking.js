function bitMasking() {
	let mask = 0x0f; //15
	let value = 0x55; //85

	return value & mask;
}

console.log(bitMasking());

/*
00001111   (0x0f)
&
01010101   (0x55)
-----------
00000101   (result: 5)


128 64 32 16 8 4 2 1 = 255
__________________________
0   1  0  1 0 1 0 1 = 85 
0   0  0  0 1 1 1 1 = 15
0   0  0  0 0 1 0 1 = 5
return the same on value from both binary int
*/
