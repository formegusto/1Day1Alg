let visited;
const R = 5;
const C = 5;
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function DFS(place, r, c, path, isPos, pi) {
  if (path.length >= 2) return;

  visited[r][c] = true;
  for (let i = 0; i < 4; i++) {
    const [nr, nc] = [r + dr[i], c + dc[i]];
    if (nr < 0 || nr >= R) continue;
    if (nc < 0 || nc >= C) continue;

    if (place[nr][nc] === "P") {
      if (place[r][c] !== "X") {
        isPos[pi] = 0;
        break;
      }
    }
    if (!visited[nr][nc]) DFS(place, nr, nc, [...path, place[r][c]], isPos, pi);
  }
}

function initVisited() {
  visited = Array.from(
    {
      length: R,
    },
    () => Array(C).fill(false)
  );

  return visited;
}

function solution(places) {
  let answer = Array(places.length).fill(1);
  let place = places[0];

  initVisited();

  console.log(answer);
  DFS(place, 0, 0, [], answer, 0);
  console.log(answer);

  //   for (let i = 0; i < places.length; i++) {
  //     const place = places[i];
  //     for (let r = 0; r < place.length; r++) {
  //       for (let c = 0; c < place[r].length; c++) {
  //         if (place[r][c] === "P") {
  //           console.log(r, c, check(place, r, c));
  //         }
  //       }
  //     }
  //   }

  return answer;
}

solution([
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
]);
