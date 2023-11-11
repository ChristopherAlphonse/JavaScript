function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
      1;
    case 2:
      2;
    case 3:
      3;
      answer = "Low";
      break;
    case 4:
      4;
    case 5:
      5;
    case 6:
      6;
      answer = "Mid";
      break;
    case 7:
      7;
    case 8:
      8;
    case 9:
      9;
      answer = "High";
      break;
    default:
      answer = "out of range";
      break;
  }
  return answer;
}

sequentialSizes(4);
console.log(sequentialSizes(1));
