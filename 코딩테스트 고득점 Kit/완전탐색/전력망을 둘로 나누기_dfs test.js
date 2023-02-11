// wire = [연결 되어 있는, 연결한]
function DFS(grid, id, visited) {
  if (visited[id - 1]) return [];

  const count = [id];
  visited[id - 1] = 1;
  if (grid[id]) {
    for (let chain of grid[id]) {
      count.push(...DFS(grid, chain, visited));
    }
  }

  return count;
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

  let gridCount = 0;
  let itemCounts = {};
  const visited = Array(n).fill(0);
  for (let i = 1; i <= n; i++) {
    if (!visited[i - 1]) {
      // 이전 DFS결과로 만들어진 전력망에 속해있는가?
      let isChain = false;
      let gridId = -1;
      if (grid[i]) {
        for (let chain of grid[i]) {
          if (visited[chain - 1]) {
            isChain = true;
            gridId = Object.entries(itemCounts).filter(([_, item]) =>
              item.includes(chain)
            )[0][0];

            break;
          }
        }
      }

      if (isChain) {
        itemCounts[gridId].push(i);
        for (let chain of grid[i]) {
          if (!visited[chain - 1]) {
            itemCounts[gridId].push(chain);
            visited[chain - 1] = 1;
          }
        }
      } else {
        gridCount++;
        const itemCount = DFS(grid, i, visited);
        itemCounts[i] = itemCount;
      }
    }
  }

  console.log(itemCounts);
}

solution(9, [
  [1, 3],
  [2, 3],
  // [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);
