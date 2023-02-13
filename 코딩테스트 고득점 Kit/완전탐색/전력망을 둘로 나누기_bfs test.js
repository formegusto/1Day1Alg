const queue = [];

function BFS(s, grid, visited) {
  visited[s] = s;

  queue.push(s);
  while (queue.length !== 0) {
    let node = queue.shift();

    if (grid[node]) {
      for (let i = 0; i < grid[node].length; i++)
        if (!visited[grid[node][i]]) {
          visited[grid[node][i]] = s;
          queue.push(grid[node][i]);
        } else {
          visited[s] = visited[grid[node][i]];
        }
    }
  }
}

/**
 *
 * @param {number} n
 * @param {array} wires
 */
function solution(n, wires) {
  const grid = wires.reduce((acc, cur) => {
    acc[cur[0]] ? acc[cur[0]].push(cur[1]) : (acc[cur[0]] = [cur[1]]);

    return acc;
  }, {});

  const visited = {};
  for (let key in grid) if (!visited[key]) BFS(key, grid, visited);

  const gridInformation = Object.values(visited).map(Number);
  const uniqGrid = [...new Set(gridInformation)];
  const gridCount = uniqGrid.length;

  //   if(gridCount > 2)
  //     break;
  const itemCounts = [];
  for (let i = 0; i < uniqGrid.length; i++)
    itemCounts.push(gridInformation.filter((v) => uniqGrid[i] === v).length);
}

solution(9, [
  [1, 3],
  [2, 3],
  //   [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);
