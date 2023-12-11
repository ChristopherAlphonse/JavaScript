function mergeSort(n) {
  if (n.length < 2) {
    return n;
  }

  let mid = Math.floor(n.length / 2);
  let left = n.slice(0, mid);
  let right = n.slice(mid, n.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex += 1;
    }
  }

  return result
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}
