const test = () => {
  let arr = [1, 2, 3, 5, 8, 13, 21];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
    console.log(count);
  }
};

test();
