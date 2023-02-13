const print = (items) => {
  console.log(items[0]);
  let middleIndex = Math.floor(items.length / 2);
  let index = 0;
  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }
  for (let i = 0; i < 100; i++) {
    console.log("hello");
  }
};

//0(1 + n/2 + 100) = 0(n) Dropping the constant



Example: 
const twoBoxes=(boxes)=>{
  boxes.forEach(function(boxes){
    console.log(boxes)
  })


  boxes.forEach(function(boxes){
    console.log(boxes)
  })

  
}
//RUNNING TWO FOR LOOPS, 0(2n)  = 0(n) Dropping the constant
