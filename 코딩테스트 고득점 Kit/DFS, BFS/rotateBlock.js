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

function isFill(block1, block2) {
  for (let i = 0; i < 4; i++) {
    const b1 = block1.block.reduce((acc, r) => acc + r.join(""), "");
    const b2 = block2.block.reduce((acc, r) => acc + r.join(""), "");

    console.log(i);
    console.log(b1);
    console.log(b2);

    let chk = 0;
    for (let i = 0; i < b1.length; i++) {
      if (b1[i] === "1" && b1[i] === b2[i]) chk++;
    }
    console.log(chk);
    if (chk === block1.length || chk === block2.length) return true;

    block2 = {
      length: block2.length,
      block: rotateBlock(block2.block),
    };
    console.log(block2);
  }

  return false;
}

console.log("1010" | "1111");

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
// let block4 = rotateBlock(block);
// // console.log(block);
// // block = rotateBlock(block);
// // console.log(block);

// console.log(
//   isEqual(
//     [
//       [0, 1],
//       [1, 1],
//       [0, 1],
//     ],
//     block4
//   )
// );

console.log(
  isEqual(
    {
      length: 4,
      block: [
        [0, 1],
        [1, 1],
        [0, 1],
      ],
    },
    {
      length: 3,
      block: [
        [0, 1],
        [0, 1],
        [0, 1],
      ],
    }
  )
);

console.log(
  isEqual(
    {
      length: 4,
      block: [
        [0, 1],
        [1, 1],
        [0, 1],
      ],
    },
    {
      length: 4,
      block: [
        [0, 1, 0],
        [1, 1, 1],
      ],
    }
  )
);
