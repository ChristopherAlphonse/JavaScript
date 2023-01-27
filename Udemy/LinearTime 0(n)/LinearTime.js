const { names } = require("./names");
// const name = ["c", "chris", "ch", "chr", "chri"];

// const newArray = new Array(10).fill(`${names}`);
// console.log(newArray);

const findCar = (arr) => {
  let start = performance.now();
  for (let i = 0; i < arr.length; i++) {
    console.log("run");
    if (arr[i] === "Chris") {
      console.log(`found ${arr[i]}`);
      break;
    }
  }
  let end = performance.now();

  const result = end - start;
  const g = Math.floor(result);
  console.log(`Total Time: ${g}00 ms`);
};

findCar(names); // linear Time o(n): n represent number of operation inputted
