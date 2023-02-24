// Simulation 방식
const ROW = 3;
const COL = 3;

// Binary
const WIN_PATTERN = [
  448, // "111000000"
  56, // "000111000"
  7, // "000000111"
  292, // "100100100"
  146, // "010010010"
  73, // "001001001"
  273, // "100010001"
  84, // "001010100"
];

function winner(flatBoard, target) {
  const pat = flatBoard.reduce(
    (acc, cur) => (cur === target ? acc + "1" : acc + "0"),
    ""
  );
  const patNum = Number.parseInt(pat, 2);
  for (let i = 0; i < 8; i++) {
    if (WIN_PATTERN[i] === (patNum & WIN_PATTERN[i])) return true;
  }

  return false;
}

function solution(board) {
  const simBoard = Array.from(
    {
      length: ROW,
    },
    () => Array(COL).fill(".")
  );
  const arr = [...board.join("")];

  // home : O
  // away : X
  const homeQ = arr.reduce(
    (acc, cur, idx) =>
      cur === "O" ? [...acc, [Math.floor(idx / 3), idx % 3]] : acc,
    []
  );
  const awayQ = arr.reduce(
    (acc, cur, idx) =>
      cur === "X" ? [...acc, [Math.floor(idx / 3), idx % 3]] : acc,
    []
  );

  let turn = "O";
  let isEnd;
  while (homeQ.length || awayQ.length) {
    const pos = turn === "O" ? homeQ.shift() : awayQ.shift();
    if (!pos) return 0;
    if (pos && isEnd) {
      //   console.log(homeQ, awayQ, isEnd, homeQ.length);
      if (homeQ.length - 1 === awayQ.length) return 1;
      else return 0;
    }

    simBoard[pos[0]][pos[1]] = turn;
    if (winner(simBoard.flat(), turn)) isEnd = turn;

    turn = turn === "O" ? "X" : "O";
  }

  return 1;
}

console.log(solution(["O.X", ".O.", "..X"]));
console.log(solution(["OOO", "OXX", "..X"]));
console.log(solution(["OOO", "XXO", "XOX"]));
console.log(solution(["O.X", "OXX", "O.O"]));

// WIN_PATTERN.forEach((v) => {
//   console.log(Number.parseInt(v, 2));
// });
