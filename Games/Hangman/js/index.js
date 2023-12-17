document.addEventListener("DOMContentLoaded", function () {
  const keyBoard = document.querySelector(".keyboard");
  const wordDisplay = document.querySelector(".word-display");
  const guessText = document.querySelector(".guesses-text b");
  const hangManImg = document.querySelector(".hangman-box img");
  const gameModal = document.querySelector(".game-modal");

  let currentWord,
    correctWord = [],
    wrongCount = 0;
  let maxGuess = 6;

  function fetchRandomWord() {
    const { word, hint } =
      wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;

    console.log(" \ndef\n not\n ", word);

    document.querySelector(".hint-text b").innerHTML = hint;

    wordDisplay.innerHTML = word
      .split("")
      .map(() => `<li class="letter"></li>`)
      .join("");
  }

  function GameOver(isWinner) {
    setTimeout(() => {}, 300);
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
      console.log(clickKey, "word found :)");
    } else {
      wrongCount++;
      hangManImg.src = `images/hangman-${wrongCount}.svg`;
      console.log(clickKey, "word NOT found :(");
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

  // console.log("index.js is running");
});
