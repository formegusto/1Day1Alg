// javascript로 절대안된다는 썰이 있음
// 뭔가 방향이동이 3개 이상되면 도형이 되었다는 거니까 방이 완성되자나
// 그럴때마다 도형이 완성되었는지 확인하면 될듯
// 도형의 조건이 필요

// https://pangtrue.tistory.com/350
const DIRS = {
  0: [-1, 0],
  1: [-1, 1],
  2: [0, 1],
  3: [1, 1],
  4: [1, 0],
  5: [1, -1],
  6: [0, -1],
  7: [-1, -1],
};

function solution(arrows) {
  let answer = 0;

  const path = { "0,0": [] };
  let prevPath = [0, 0];
  for (let i = 0; i < arrows.length; i++) {
    for (let j = 0; j <= 1; j++) {
      const [r, c] = prevPath;
      const coords = `${r},${c}`;
      const [dr, dc] = DIRS[arrows[i]];
      const [nr, nc] = [r + dr, c + dc];
      const nextCoords = `${nr},${nc}`;

      if (path[nextCoords]) {
        if (!path[nextCoords].includes(coords)) answer++;
        path[nextCoords].push(coords);
        path[coords].push(nextCoords);
      } else {
        path[nextCoords] = [coords];

        if (path[coords]) {
          path[coords].push(nextCoords);
        } else {
          path[coords] = [nextCoords];
        }
      }

      prevPath = [nr, nc];
    }
  }

  console.log(path);

  return answer;
}

console.log(
  solution([6, 6, 6, 4, 4, 4, 2, 2, 2, 0, 0, 0, 1, 6, 5, 5, 3, 6, 0])
);
console.log(solution([2, 2, 5, 5, 2, 2, 7, 7]));
