document.addEventListener("DOMContentLoaded", function () {
  disableClick();
  const keyBoard = document.querySelector(".keyboard");
  const wordDisplay = document.querySelector(".word-display");
  const guessText = document.querySelector(".guesses-text b");
  const hangManImg = document.querySelector(".hangman-box img");
  const gameModal = document.querySelector(".game-modal");
  const resetGame = document.querySelector(".reset");

  function disableClick() {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }

  let currentWord, correctWord, wrongCount;
  let maxGuess = 6;

  function reset() {
    disableClick();
    correctWord = [];
    wrongCount = 0;

    hangManImg.src = `images/hangman-${wrongCount}.svg`;
    guessText.innerHTML = `${wrongCount} / ${maxGuess}`;
    keyBoard
      .querySelectorAll("button")
      .forEach((btn) => (btn.disabled = false));
    wordDisplay.innerHTML = currentWord
      .split("")
      .map(() => `<li class="letter"></li>`)
      .join("");
    gameModal.classList.remove("show");
  }

  function fetchRandomWord() {
    const { word, hint } =
      wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;

    console.log(" \ndef\n not\n ", word);

    document.querySelector(".hint-text b").innerHTML = hint;

    reset();
  }

  function GameOver(isWinner) {
    setTimeout(() => {
      const modalText = isWinner
        ? `You found the word:`
        : ` The correct word was : `;
      gameModal.querySelector("img").src = `./images/${
        isWinner ? "victory" : "lost"
      }.gif`;
      gameModal.querySelector("h4").innerHTML = `${
        isWinner ? "Congrats!" : "Game Over!"
      }`;

      gameModal.querySelector(
        "p"
      ).innerHTML = `${modalText}<b>${currentWord.toUpperCase()}</b>`;

      gameModal.classList.add("show");
    }, 300);
  }

  function initGame(button, clickKey) {
    // console.log(clickKey);

    if (currentWord.includes(clickKey)) {
      [...currentWord].forEach((letter, index) => {
        if (letter === clickKey) {
          correctWord.push(letter);

          wordDisplay.querySelectorAll("li")[index].innerHTML = letter;
          wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
        }
      });
      // console.log(clickKey, "word found :)");
    } else {
      wrongCount++;
      hangManImg.src = `images/hangman-${wrongCount}.svg`;
      // console.log(clickKey, "word NOT found :(");
    }
    button.disabled = true;
    guessText.innerHTML = `${wrongCount} / ${maxGuess}`;

    if (wrongCount === maxGuess) {
      return GameOver(false);
    }
    if (correctWord.length == currentWord.length) {
      return GameOver(true);
    }
  }

  for (let index = 97; index < 122; index++) {
    const button = document.createElement("button");
    button.innerHTML = String.fromCharCode(index);
    keyBoard.appendChild(button);
    button.addEventListener("click", (e) =>
      initGame(e.target, String.fromCharCode(index))
    );
  }

  fetchRandomWord();
  resetGame.addEventListener("click", fetchRandomWord);

  // console.log("index.js is running");
});
