let letters = ["a", "b", "c", "d", "e", "f", "g"];
letters = new Array(letters);

let count = 0;

while (letters[count] != "g") {
  count++;
  console.log(count);
  break;
}
