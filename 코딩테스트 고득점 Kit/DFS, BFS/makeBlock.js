function makeBlock(arr) {
  const rList = arr.map(([r]) => r);
  const cList = arr.map(([_, c]) => c);

  let [r1, r2] = [Math.min(...rList), Math.max(...rList)];
  let [c1, c2] = [Math.min(...cList), Math.max(...cList)];

  const block = Array.from(
    {
      length: r2 - r1 - (r1 - r1) + 1,
    },
    () => Array(c2 - c1 - (c1 - c1) + 1).fill(0)
  );
  for (let i = 0; i < arr.length; i++) {
    let [r, c] = arr[i];
    [r, c] = [r - r1, c - c1];

    block[r][c] = 1;
  }

  return block;
}

console.log(
  makeBlock([
    [0, 2],
    [2, 4],
    [0, 3],
    [2, 3],
    [1, 3],
  ])
);

console.log(
  makeBlock([
    [0, 5],
    [1, 5],
  ])
);

console.log(
  makeBlock([
    [1, 0],
    [2, 0],
    [1, 1],
  ])
);

console.log(
  makeBlock([
    [1, 2],
    [2, 2],
    [3, 2],
    [2, 1],
  ])
);
