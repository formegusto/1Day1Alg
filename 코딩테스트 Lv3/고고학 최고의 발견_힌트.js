/*
1. 시계를 돌리는 순서는 답에 영향을 주지 않는다
ex) (0,0) (0,1) (1,0) 번타일을 어떤 순서로 눌러도 각 시계들을 돌린 횟수들이 같다면 같은 결과 이다

2. 같은 시계를 4번 이상 돌리는 것은 무의미한 일이다 같은 시계를 4번이상 돌리면 원래 값으로 회귀 하므로 돌리지 않은 것과 같다

3. 맨 윗번줄 시계를 돌린 횟수에 의해 나머지 행의 시계를 몇번 돌려야 하는지 결정 된다
ex) 3x3 시계 집합 에서 첫 행을 각각 a b c 번 돌려 12 시 3시 6시의 결과를 얻었다면
다음 행에서 각각 시계를 0번 3번 2번 돌려야 처음 행의 시계가 모두 12를 가르키게 된다

4. n 번째 행의 m번재 열의 시계는 n+1행의 m번쨰 열의 시계를 돌리것의 의해 결과가 종속적으로 변경 되게 된다
*/

/*

*/
function solution(clockHands) {
  let answer = Infinity;

  const len = clockHands.length;

  // 해당 값을 회전시킨 결과 값 반환
  const rotate = (idx, a) => {
    idx += a;
    if (idx < 0) return idx + 4;
    if (idx > 3) return idx - 4;
    return idx;
  };

  // 상, 하, 좌, 우, 중 5개 값을 a만큼 회전
  const rotatePlus = (x, y, table, a) => {
    const targets = [
      [x, y],
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ];
    for (const [tx, ty] of targets) {
      if (tx < 0 || tx >= len || ty < 0 || ty >= len) continue;
      table[tx][ty] = rotate(table[tx][ty], a);
    }
  };

  // 퍼즐이 풀렸는지 확인
  const isSolved = (table) => {
    // 마지막 전까지는 모두 0으로 만들었으므로 마지막 행만 판별
    const checker = table[len - 1].reduce((sum, cel) => sum + cel, 0);
    return checker === 0;
  };

  // 첫번째 줄 조작 이후 후처리, 결과값 갱신
  const postProcess = (table, count) => {
    console.log(table);
    let result = count;

    for (let x = 1; x < len; x++) {
      for (let y = 0; y < len; y++) {
        const key = table[x - 1][y] ? 4 - table[x - 1][y] : 0;
        rotatePlus(x, y, table, key);
        result += key;
      }
    }
    if (isSolved(table)) answer = Math.min(answer, result);
  };

  const setTable = (y, table, c) => {
    const newTable = table.map((v) => [...v]);
    rotatePlus(0, y, newTable, c);
    return newTable;
  };

  // 첫번째 줄 조작 (조작 안함, 우측 회전, 좌측 회전, 180도 회전)후 후처리 호출
  const dfs = (y, count, table) => {
    if (y === len) return postProcess(table, count);
    const cases = [0, 1, 2, 3];
    for (const c of cases) dfs(y + 1, count + c, setTable(y, table, c));
  };

  dfs(0, 0, clockHands);
  return answer;
}

solution([
  [0, 3, 3, 0],
  [3, 2, 2, 3],
  [0, 3, 2, 0],
  [0, 3, 3, 3],
]);

console.log(
  solution([
    [0, 1, 3, 0],
    [1, 2, 0, 0],
    [3, 0, 2, 2],
    [0, 2, 0, 0],
  ])
);
