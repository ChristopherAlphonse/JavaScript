const { names } = require("./names");

const newArray = new Array(10).fill(`${names}`);
console.log(newArray);

const findCar = (arr) => {
  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "chris") {
      console.log(`found the ${arr[i]}`);
    }
  }
  let t1 = performance.now();
  const res = t1 - t0;
  console.log(`Total run time = ${res}ms`);
};

findCar(newArray);
