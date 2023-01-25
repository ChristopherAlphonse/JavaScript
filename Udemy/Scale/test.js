const car = ["car"];

const findCar = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "car") {
      console.log(`found the ${arr[i]}`);
    }
  }
};

findCar(car);
