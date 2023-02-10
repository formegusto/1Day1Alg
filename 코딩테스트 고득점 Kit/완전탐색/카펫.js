function solution(brown, yellow) {
  const total = brown + yellow;

  let row, col;
  for (let i = 0; i * i <= total; i++) {
    if (total % i !== 0) continue;
    row = i;
    col = parseInt(total / row);
    let yellowRow = row - 2;
    let yellowCol = col - 2;

    if (yellowRow * yellowCol === yellow) break;
  }

  return [row, col].sort((a, b) => b - a);
}

console.log(solution(10, 2));
console.log(solution(8, 1));
