// 제자리, 상, 하, 좌, 우
const DR = [0, -1, 1, 0, 0];
const DC = [0, 0, 0, -1, 1];
let R, C;

function permutation(arr, r) {
  if (r === 1) return arr.map((v) => [v]);

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const perm = permutation(arr, r - 1);
    const attach = perm.map((p) => [arr[i], ...p]);

    result.push(...attach);
  }

  return result;
}

function rotate(clocks, r, c, rotateCnt) {
  for (d = 0; d < 5; d++) {
    const [dr, dc] = [DR[d], DC[d]];
    const [nr, nc] = [r + dr, c + dc];
    if (nr < 0 || nr >= R) continue;
    if (nc < 0 || nc >= C) continue;

    clocks[nr][nc] = (clocks[nr][nc] + rotateCnt) % 4;
  }
}

function check(clocks, perm) {
  let answer = 0;

  for (let c = 0; c < perm.length; c++) {
    if (perm[c]) {
      rotate(clocks, 0, c, perm[c]);
      answer += perm[c];
    }
  }

  for (let r = 1; r < clocks.length; r++) {
    for (let c = 0; c < clocks[r].length; c++) {
      // 내 위에 있는 퍼즐이 0이 아니라면,
      if (clocks[r - 1][c]) {
        const rotateCount = 4 - clocks[r - 1][c];
        rotate(clocks, r, c, rotateCount);
        answer += rotateCount;
      }
    }
  }

  for (let i = 0; i < C; i++) if (clocks[R - 1][i]) return Infinity;

  return answer;
}

function solution(clocks) {
  let answer = Infinity;
  R = clocks.length;
  C = clocks[0].length;

  const strClock = JSON.stringify(clocks);
  const perms = permutation([0, 1, 2, 3], C);
  for (let p = 0; p < perms.length; p++)
    answer = Math.min(answer, check(JSON.parse(strClock), perms[p]));

  return answer;
}

console.log(
  solution([
    [0, 1, 3, 0],
    [1, 2, 0, 0],
    [3, 0, 2, 2],
    [0, 2, 0, 0],
  ])
);
// [
//   [0, 3, 3, 0],
//   [3, 2, 2, 3],
//   [0, 3, 2, 0],
//   [0, 3, 3, 3],
// ][([0, 0, 3, 0], [3, 1, 2, 3], [0, 0, 2, 0], [0, 3, 3, 3])][
//   ([0, 0, 0, 0], [3, 1, 1, 3], [0, 0, 3, 0], [0, 3, 3, 3])
// ][([0, 0, 0, 0], [0, 1, 1, 3], [3, 0, 3, 0], [1, 3, 3, 3])][
//   ([0, 0, 0, 0], [0, 0, 1, 3], [3, 1, 3, 0], [1, 2, 3, 3])
// ][([0, 0, 0, 0], [0, 0, 0, 3], [3, 1, 0, 0], [1, 2, 2, 3])][
//   ([0, 0, 0, 0], [0, 0, 1, 3], [3, 1, 3, 0], [1, 2, 3, 3])
// ][([0, 0, 0, 0], [0, 0, 1, 3], [0, 1, 3, 0], [0, 2, 3, 3])][
//   ([0, 0, 0, 0], [0, 0, 1, 3], [0, 0, 3, 0], [0, 3, 3, 3])
// ][([0, 0, 0, 0], [0, 0, 1, 3], [0, 0, 0, 0], [0, 3, 2, 3])];
