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

  const [maxX, maxY, minX, minY] = points.reduce(
    ([maxX, maxY, minX, minY], [x, y]) => [
      Math.max(maxX, x),
      Math.max(maxY, y),
      Math.min(minX, x),
      Math.min(minY, y),
    ],
    [
      Number.MIN_SAFE_INTEGER,
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER,
    ]
  );

  // 보드를 생성한다.
  let board = Array.from(Array(maxY - minY + 1), () =>
    Array(maxX - minX + 1).fill(".")
  );

  // 교점의 위치에 별을 그린다.
  points.forEach(([x, y]) => {
    board[maxY - y][x - minX] = "*";
  });

  return board.map((x) => x.join(""));
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
