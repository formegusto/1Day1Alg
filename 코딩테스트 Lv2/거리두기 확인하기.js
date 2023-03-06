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

    if (!visited[nr][nc]) {
      if (place[nr][nc] === "P" && place[r][c] !== "X") {
        isPos[pi] = 0;
      } else DFS(place, nr, nc, [...path, place[r][c]], isPos, pi);
    }
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

  for (let p = 0; p < places.length; p++) {
    const place = places[p];
    for (let i = 0; i < place.length; i++) {
      for (let j = 0; j < place[i].length; j++) {
        if (place[i][j] === "P") {
          initVisited();
          DFS(place, i, j, [], answer, p);
        }
      }
    }
  }

  return answer;
}

solution([
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
]);
