// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  //0(n)
  let a = 5; //0(1)
  let b = 10; //0(1)
  let c = 50; //0(1)
  for (let i = 0; i < input; i++) {
    //0(n)
    let x = i + 1; //0(n)
    let y = i + 2; //0(n)
    let z = i + 3; //0(n)
  }
  for (let j = 0; j < input; j++) {
    //0(n)
    let p = j * 2; //0(n)
    let q = j * 2; //0(n)
  }
  let whoAmI = "I don't know"; //0(1)
}

// bigO(4 + 7n);
