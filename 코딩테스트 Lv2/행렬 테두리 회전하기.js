// -1 해서 주기
function rotate(arr, start, end) {
  let [sr, sc] = start;
  let [er, ec] = end;
  sr -= 1;
  sc -= 1;
  er -= 1;
  ec -= 1;

  let tmp = arr[sr][sc];
  min = tmp;
  let swap;
  for (let c = sc + 1; c < ec + 1; c++) {
    swap = arr[sr][c];
    arr[sr][c] = tmp;
    tmp = swap;
    min = Math.min(min, tmp);
  }

  for (let r = sr + 1; r < er + 1; r++) {
    swap = arr[r][ec];
    arr[r][ec] = tmp;
    tmp = swap;
    min = Math.min(min, tmp);
  }

  for (let c = ec - 1; c > sc - 1; c--) {
    swap = arr[er][c];
    arr[er][c] = tmp;
    tmp = swap;
    min = Math.min(min, tmp);
  }

  for (let r = er - 1; r > sr - 1; r--) {
    swap = arr[r][sc];
    arr[r][sc] = tmp;
    tmp = swap;
    min = Math.min(min, tmp);
  }
  return min;
}

function solution(rows, columns, queries) {
  const arr = Array.from({ length: rows }, (_, r) =>
    Array.from(
      {
        length: columns,
      },
      (_, c) => r * columns + (c + 1)
    )
  );

  const answer = [];
  for (let q = 0; q < queries.length; q++) {
    answer.push(
      rotate(
        arr,
        [queries[q][0], queries[q][1]],
        [queries[q][2], queries[q][3]]
      )
    );
  }

  return answer;
}

solution(6, 7, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]);
