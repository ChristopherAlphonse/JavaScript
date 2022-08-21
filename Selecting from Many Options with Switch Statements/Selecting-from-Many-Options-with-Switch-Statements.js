const caseInSwitch = (val) => {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  // Only change code above this line
  return answer;
};

caseInSwitch(1);
console.log(caseInSwitch(4));

// 1 - alpha
// 2 - beta
// 3 - gamma
// 4 - delta
