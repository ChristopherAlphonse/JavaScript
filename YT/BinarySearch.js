function binarySearch(arr, target) {
    if (arr.length === 0 || !arr) return "Array is empty";
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === arr[mid]) {
            return mid;
        } else if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [];
const target = 5;
console.log(binarySearch(arr2, target));

// time: logn
