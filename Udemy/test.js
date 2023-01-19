const car = ["y", "ca", "car"];

const findCar = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "car") {
      console.log(`found the ${arr[i]}`);
    } else {
      console.log("Not Found");
    }
  }
};

findCar(car);
