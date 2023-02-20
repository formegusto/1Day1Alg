function getMaps(rectangle) {
  const maps = Array.from(
    {
      length: 103,
    },
    () => Array(103).fill(0)
  );
  for (let i = 0; i < rectangle.length; i++) {
    const [x1, y1, x2, y2] = rectangle[i];
    for (let y = y1 * 2; y <= y2 * 2; y++) {
      for (let x = x1 * 2; x <= x2 * 2; x++) {
        maps[y][x] = 1;
      }
    }
  }
  for (let i = 0; i < rectangle.length; i++) {
    const [x1, y1, x2, y2] = rectangle[i];
    for (let y = y1 * 2 + 1; y < y2 * 2; y++) {
      for (let x = x1 * 2 + 1; x < x2 * 2; x++) {
        maps[y][x] = 0;
      }
    }
  }

  return maps;
}

function solution(rectangle, characterX, characterY, itemX, itemY) {
  const dy = [1, -1, 0, 0];
  const dx = [0, 0, 1, -1];
  const maps = getMaps(rectangle);

  const endX = itemX * 2,
    endY = itemY * 2;
  const q = [];
  q.push([characterX * 2, characterY * 2]);
  let cnt = 0;
  while (q.length) {
    const [x, y] = q.shift();

    if (x === endX && y === endY) {
      cnt = Math.floor(maps[y][x] / 2);
      break;
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (maps[ny][nx] === 1) {
        maps[ny][nx] = maps[y][x] + 1;
        q.push([nx, ny]);
      }
    }
  }
  return cnt;
}
