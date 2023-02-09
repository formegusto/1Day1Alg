/**
 *
 * @param {array} sizes
 * @returns {number}
 */
function solution(sizes) {
  const uniSizes = [];
  for (let i = 0; i < sizes.length; i++) {
    for (let j = 0; j < sizes[i].length; j++) {
      if (!uniSizes.includes(sizes[i][j])) uniSizes.push(sizes[i][j]);
    }
  }
  uniSizes.sort((a, b) => a - b);

  for (let wi = 0; wi < uniSizes.length; wi++) {
    const w = uniSizes[wi];
    for (let hi = wi; hi < uniSizes.length; hi++) {
      const h = uniSizes[hi];
      let z = 0;
      for (; z < sizes.length; z++) {
        const size = sizes[z];
        if (w >= size[0] && h >= size[1]) continue;
        if (w >= size[1] && h >= size[0]) continue;

        break;
      }
      if (z === sizes.length) return w * h;
    }
  }

  //   console.log(uniSizes);

  //   for (let i = 0; i < sizes.length; i++) {
  //     const w = sizes[i][0];
  //     for (let j = 0; j < sizes.length; j++) {
  //       const h = sizes[j][1];
  //       let z = 0;
  //       for (; z < sizes.length; z++) {
  //         const size = sizes[z];
  //         if (w >= size[0] && h >= size[1]) continue;
  //         if (w >= size[1] && h >= size[0]) continue;

  //         break;
  //       }

  //       console.log(z, w, h);
  //       if (z === sizes.length) {
  //         min = w * h;
  //       }
  //     }
  //   }
}

console.log(solution([[1, 1]]));

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);

console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);

console.log(
  solution([
    [3, 5],
    [6, 2],
  ])
);

// 이건 진짜 반성,,,
// 다음의 방법은 계속 돌려보는 거임
// 이 때는 가로 세로라는 의미가 아님 변수가
// 가로를 가장 크게 돌리거나 안 돌리거나 해서 만들었을 때의 크기가 a고
// 이것이 현재 지갑의 w보다 크면 넣을 수 있음
// 세로도임. 이 때, 세로에는 가로보다 비교적 작은 값들이 배치되게 될거임
// 그래서 가로는 최대, 세로는 최소 가능한 수를 골라낼 수 있는거임
function solution2(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > w) w = a;
    if (b > h) h = b;
  });

  return w * h;
}

console.log(solution2([[1, 1]]));

console.log(
  solution2([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

console.log(
  solution2([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);

console.log(
  solution2([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);

console.log(
  solution2([
    [3, 5],
    [6, 2],
  ])
);
