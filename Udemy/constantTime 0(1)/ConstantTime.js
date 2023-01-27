const boxes = ["b", "o", "x", "e", "s"];

const compressFirstBox = (boxes) => {
  t0 = performance.now();
  console.log(boxes[0]);
  console.log(boxes[1]);
  t1 = performance.now();

  let res = t1 - t0;

  let number = 4.96;
  let decimal = Math.trunc(number);
  console.log(res);
  console.log(decimal);
};

compressFirstBox(boxes);
