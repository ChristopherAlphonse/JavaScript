function binarySearch(arr, x) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    //  let mid = l + (r - 1) / 2;
    let value = arr[mid];

    if (value === x) {
      return true;
    } else if (value < x) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
}

function main() {
  let length = 100000009;
  let arr = new Array(length);

  for (let i = 0; i < length; i++) {
    arr[i] = i;
  }

  let startTime = performance.now();

  console.log(binarySearch(arr, 4));

  let endTime = performance.now();

  let executionTime = Math.floor(endTime - startTime);
  console.log(`Execution time: ${executionTime}ms`);
}

main();
