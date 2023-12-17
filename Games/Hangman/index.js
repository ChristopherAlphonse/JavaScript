//
const keyBoard = document.querySelector(".keyboard");

for (let index = 97; index < 122; index++) {
  const button = document.createElement("button");
  button.innerHTML = String.fromCharCode(index);
  keyBoard.appendChild(button);
  //   console.log(String.fromCharCode(index));
}
