function rotateBlock(arr) {
  const r = arr.length;
  const c = arr[0].length;

  const newR = c;
  const newC = r;
  // 행은 기존 열 index가 된다.
  // 열은 기존 행 index가 된다.

  const rotate = Array.from(
    {
      length: newR,
    },
    () => Array(newC).fill(0)
  );
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      rotate[j][r - i - 1] = arr[i][j];
    }
  }

  return rotate;
}

rotateBlock([
  [1, 1, 0],
  [0, 1, 0],
  [0, 1, 1],
]);

rotateBlock([
  [0, 1],
  [1, 1],
  [0, 1],
]);

let block = [
  [0, 1],
  [1, 1],
  [0, 1],
];
console.log(block);
block = rotateBlock(block);
console.log(block);
block = rotateBlock(block);
console.log(block);
block = rotateBlock(block);
console.log(block);
block = rotateBlock(block);
console.log(block);
