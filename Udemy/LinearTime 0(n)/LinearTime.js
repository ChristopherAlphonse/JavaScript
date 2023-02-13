import { names } from "./names.js";

const findCar = (arr) => {
  let start = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === `${input}`) {
      console.log(`Found user name ${input}`);
      break;
    }
  }
  let end = performance.now();

  const result = end - start;
  const g = Math.round(result);
  console.log(`It Took ${g}ms to find ${input}`);
};

let input = "Chris";
findCar(names); // linear Time o(n): n represent number of operation inputted
// worst case, user name input is at the very end.
