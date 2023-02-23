/**
 *
 * @param {array} line
 */
function solution(line) {
  const points = [];
  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const [a, b, e] = line[i];
      const [c, d, f] = line[j];

      const gradient = a * d - b * c;
      if (!gradient) continue;

      const x = (b * f - e * d) / gradient;
      const y = (e * c - a * f) / gradient;
      if (Number.isInteger(x) && Number.isInteger(y)) points.push([x, y]);
    }
  }

  let [maxX, maxY] = Array(2).fill(Number.MIN_SAFE_INTEGER);
  let [minX, minY] = Array(2).fill(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    [maxX, maxY] = [Math.max(x, maxX), Math.max(y, maxY)];
    [minX, minY] = [Math.min(x, minX), Math.min(y, minY)];
  }

  const [rSize, cSize] = [maxY - minY + 1, maxX - minX + 1];
  const board = Array.from(
    {
      length: rSize,
    },
    () => Array(cSize).fill(".")
  );

  for (let i = 0; i < points.length; i++) {
    let [x, y] = points[i];
    x = x - minX;
    y = maxY - y;
    board[y][x] = "*";
  }

  return board.map((b) => b.join(""));
}

// 비교 예시
/**
 * x = (BF - ED) / (AD - BC)
 * y = (EC - AF) / (AD - BC)
 * 교점이 없는 경우 = AD - BC
 */

console.log(
  solution([
    [2, -1, 4],
    [-2, -1, 4],
    [0, -1, 1],
    [5, -8, -12],
    [5, 8, 12],
  ])
);
