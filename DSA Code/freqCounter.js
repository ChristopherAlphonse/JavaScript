function freq(arr1, arr2) {
  if (arr1.length != arr2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for (let index in arr1) {
    freq1[index] = (freq1[index] || 0) + 1;
    // console.log(freq1);
  }
  for (let index in arr2) {
    freq2[index] = (freq2[index] || 0) + 1;
    // console.log(freq2);
  }

  for (let key in freq1) {
    if (!(key ** 2 in freq2)) {
      return false;
    }
    if (freq2[key ** 2] !== freq1[key]) {
      return false;
    }
    console.log(`freq1 ${freq1[key]} | freq2:${freq2[key]} | key: ${key}`);
  }

  return true;
}

// console.log(freq([1, 3], [4, 4, 1])); //false
console.log(freq([1, 2, 3], [1, 4, 9])); //true
// console.log(freq([1, 2, 3], [4, 4, 1])); //false
