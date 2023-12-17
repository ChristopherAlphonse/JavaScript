let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;
let tiles = Number(9);

window.onload = function () {
  setGame();
};

function setGame() {
  for (let i = 0; i < tiles; i++) {
    let gameTile = document.createElement("div");
    gameTile.id = i.toString();
    gameTile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(gameTile);
  }
  setInterval(setMole, 1000);
  setInterval(setPlant, 1500);
}

function getRandomTile() {
  let num = Math.floor(Math.random() * tiles);
  return String(num);
}

function setMole() {
  if (gameOver) {
    return;
  }
  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }
  let mole = document.createElement("img");
  mole.src = "./img/monty-mole.png";

  let num = getRandomTile();
  if (currPlantTile && currPlantTile.id == num) {
    return;
  }
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }
  if (currPlantTile) {
    currPlantTile.innerHTML = "";
  }
  let plant = document.createElement("img");
  plant.src = "./img/piranha-plant.png";

  let num = getRandomTile();
  if (currMoleTile && currMoleTile.id == num) {
    return;
  }
  currPlantTile = document.getElementById(num);
  currPlantTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = String(score);
  } else if (this == currPlantTile) {
    document.getElementById("score").innerText = "GAME OVER: " + String(score);
    gameOver = true;
  }
}

function restartGame() {
  location.reload();
}
