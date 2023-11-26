function chessBoard(n) {
  let size = 8;
  let counter = "";

  for (let i = 0; i <= size; i++) {
    for (let j = 0; j <= size; j++) {
      if ((i + j) % 2 === 0) {
        counter += "#";
      } else {
        counter += "";
      }
    }

    counter += "\n";
  }
}
chessBoard(8);
