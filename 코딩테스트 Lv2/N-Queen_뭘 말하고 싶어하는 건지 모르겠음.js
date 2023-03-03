function nQueens(i, col) {
  n = col.length - 1;
  if (promising(i, col))
    if (i === n) {
      for (let j = 1; j <= n; j++) console.log(col[j]);
    } else {
      for (let j = 1; j <= n; j++) {
        col[i + 1] = j;
        nQueens(i + 1, col);
      }
    }
}

function promising(i, col) {
  let k = 1;
  let flag = true;
  while (k < i && flag) {
    if (col[i] === col[k] || Math.abs(col[i] - col[k]) === i - k) flag = false;
    k += 1;
  }
  return flag;
}

function solution(n) {
  const col = Array(n + 1).fill(0);

  nQueens(0, col);
}

solution(4);
