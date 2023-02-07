const DIRS = {
  up: [0, 1],
  down: [0, -1],
  left: [-1, 0],
  right: [1, 0],
};

function solution(keyinput, board) {
  let answer = [0, 0];

  const maxX = Math.floor(board[0] / 2);
  const maxY = Math.floor(board[1] / 2);
  for (let i = 0; i < keyinput.length; i++) {
    let [dx, dy] = DIRS[keyinput[i]];
    let [nx, ny] = [answer[0] + dx, answer[1] + dy];

    if (nx <= maxX && nx >= maxX * -1) answer[0] = nx;
    if (ny <= maxY && ny >= maxY * -1) answer[1] = ny;
  }

  return answer;
}
