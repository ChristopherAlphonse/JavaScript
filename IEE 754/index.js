// Why 0.1 + 0.2 === 0.30000000000000004
//objective: represent this formula in code : N=(-1)^Sign *1.mantissa*2(exponent -15)

//The Number type is a double-precision 64-bit binary format IEEE 754 value

// BITS 0  1 2 3 4 5 6   7 8 9 10 11 12 13 14 15
// TYPE S  E E E E E E   M M M M  M  M  M  M  M

const exponentBits = 5;
const mantissaBits = 10;
const nonSignBits = exponentBits + mantissaBits;

function encode(n) {
    const sign = Math.sign(1 / n) == -1 ? 1 : 0;
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

    if (n === 0) {
        return sign === 0 ? 0 : 1 << nonSignBits;
    }

    let exponent = Math.floor(Math.log2(Math.abs(n)));
    const lower = 2 ** exponent;
    const upper = 2 ** (exponent + 1);
    exponent = (exponent + 15) & 0b11111;
    // 0b11111 range(0-31) , 31 in binary is 11111, so any bits higher than the 5 least significant bits are effectively discarded.

    const percentage = (Math.abs(n) - lower) / (upper - lower);
    const mantissa = 1024 * percentage;
    return (sign << nonSignBits) | (exponent << mantissaBits) | mantissa;
}
const decode = (encodedValue) => {
    const sign = (encodedValue & 0b1000000000000000) >> nonSignBits;
    const exponent = (encodedValue & 0b0111110000000000) >> mantissaBits;
    const mantissa = encodedValue & 0b0000001111111111;

    if (exponent === 0 && mantissa === 0) {
        return sign === 1 ? -0 : 0;
    }

    if (exponent === 0b11111) {
        if (mantissa === 0) {
            return sign === 0 ? Infinity : -Infinity;
        } else {
            return NaN;
        }
    }

    const wholePart = exponent === 0 ? 0 : 1;

    const percentage = mantissa / 1024;

    return (-1) ** sign * (wholePart + percentage) * 2 ** (exponent - 15);
};

const floatNumber = 12.52571;
const encoded = encode(floatNumber);
const decoded = decode(encoded);
const infinityCheck = decode(0b0111110000000000);
const minusInfinityCheck = decode(0b1111110000000000);
const nanCheck = decode(0b1111110000000001);

console.log(`floatNumber: ${floatNumber}`);
console.log(`encoded: ${encoded}`);
console.log(`decoded: ${decoded}`);
console.log(`infinity: ${infinityCheck}`);
console.log(`-infinity: ${minusInfinityCheck}`);
console.log(`nan: ${nanCheck}`);
// 19.59375 log10 =
//denary: 16 | 8 | 4 | 2 | 1 |.| 0.5 | 0.25 | 0.125 | 0.625 | 0.03125
//binary: 1 | 0 | 0 |1 | 1 | . | 1  | 0    |   0   |  1    |    1
