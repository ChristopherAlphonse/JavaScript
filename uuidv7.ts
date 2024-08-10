export function uuidv7(): Uint8Array {
    // random bytes
    const value = new Uint8Array(16)
    crypto.getRandomValues(value)

    // current timestamp in ms
    const timestamp = BigInt(Date.now())

    // time
    value[0] = Number((BigInt(timestamp) >> BigInt(40)) & BigInt(0xff))
    value[1] = Number((BigInt(timestamp) >> BigInt(32)) & BigInt(0xff))
    value[2] = Number((BigInt(timestamp) >> BigInt(24)) & BigInt(0xff))
    value[3] = Number(BigInt(timestamp >> BigInt(16)) & BigInt(0xff))
    value[4] = Number((BigInt(timestamp) >> BigInt(8)) & BigInt(0xff))
    value[5] = Number(BigInt(timestamp) & BigInt(0xff))

    // version
    value[6] = (value[6] & 0x0f) | 0x70
    value[8] = (value[8] & 0x3f) | 0x80
    return value
}

const uuidValue = uuidv7()
const uuidStr = Array.from(uuidValue)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
console.log(uuidStr)

/*

0190163d-8694-739b-aea5-966c26f8ad91

    timestamp = 0190163d-8694
    version = 7
    random_a = 39b
    variant = a
    random_b = ea5-966c26f8ad91

The 128-bit value consists of several parts:

timestamp (48 bits) is a Unix timestamp in milliseconds.
ver (4 bits) is a UUID version (7).
rand_a (12 bits) is randomly generated.
var* (2 bits) is equal to 10.
rand_b (62 bits) is randomly generated.

* In string representation, each symbol encodes 4 bits as a hex number, so the a in the example is 1010, where the first two bits are the fixed variant (10) and the next two are random. So the resulting hex number can be either 8 (1000), 9 (1001), a (1010) or b (1011).

*/
