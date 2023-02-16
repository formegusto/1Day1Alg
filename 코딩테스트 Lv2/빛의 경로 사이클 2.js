let R, C;
let dr = [-1, 0, 1, 0],
  dc = [0, -1, 0, 1];
let isVisited;

function light(grid, r, c, d) {
  let cnt = 0;

  while (true) {
    if (isVisited[r][c * 4 + d]) break;

    cnt++;
    isVisited[r][c * 4 + d] = true;

    if (grid[r].charAt(c) === "L") d = d === 0 ? 3 : d - 1;
    else if (grid[r].charAt(c) === "R") d = d === 3 ? 0 : d + 1;

    r = (r + dr[d] + R) % R;
    c = (c + dc[d] + C) % C;
  }

  return cnt;
}

function solution(grid) {
  const answer = [];

  R = grid.length;
  C = grid[0].length;

  isVisited = Array.from(
    {
      length: R,
    },
    () => Array(C * 4).fill(false)
  );
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      for (let d = 0; d < 4; d++) {
        if (!isVisited[i][j * 4 + d]) answer.push(light(grid, i, j, d));
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
console.log(solution(["SL", "LR"]));
