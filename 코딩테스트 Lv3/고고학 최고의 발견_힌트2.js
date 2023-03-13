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
  const length = clockHands.length;

  clockHands = clockHands.map((el) => el.map((el) => (el ? 4 - el : el)));

  const getFixedNum = (num) => {
    while (num >= 4) num -= 4;
    while (num < 0) num += 4;

    return num;
  };

  const calculator = (arr) => {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        const value = arr[i][j];

        if (arr[i + 1]) {
          arr[i + 1][j] -= value;

          if (arr[i + 1][j - 1] !== undefined) arr[i + 1][j - 1] -= value;
          if (arr[i + 1][j + 1] !== undefined) arr[i + 1][j + 1] -= value;
        }

        if (arr[i + 2]) {
          arr[i + 2][j] -= value;
        }
      }
    }

    return arr[length - 1].map((el) => getFixedNum(el));
  };

  const getLastColDiffByHeadIdxValue1 = (headIndex) => {
    const map = new Array(length).fill().map((_el, idx) => {
      const newArray = new Array(length).fill(0);

      if (idx === 0) {
        newArray[headIndex] = -1;

        if (headIndex - 1 >= 0) newArray[headIndex - 1] = -1;
        if (headIndex + 1 < length) newArray[headIndex + 1] = -1;
      }

      if (idx === 1) {
        newArray[headIndex] = -1;
      }

      return newArray;
    });

    return calculator(map);
  };

  const headerOneValueAffectMap = new Array(length)
    .fill()
    .map((_el, idx) => getLastColDiffByHeadIdxValue1(idx));

  const calculated = calculator(JSON.parse(JSON.stringify(clockHands)));

  const counter = new Array(length).fill(0);
  const validHeaders = [];

  const increaseCounter = () => {
    counter[length - 1] += 1;

    for (let i = length - 1; i >= 0; i--) {
      if (counter[i] >= 4) {
        if (i === 0) {
          counter[i] = -1;
          return;
        }

        counter[i] = 0;
        counter[i - 1] += 1;
      }
    }
  };

  while (true) {
    if (counter[0] === -1) break;
    let isValid = true;

    for (let i = 0; i < length; i++) {
      const targetSum =
        calculated[i] +
        headerOneValueAffectMap.reduce((acc, cur, index) => {
          return acc + cur[i] * counter[index];
        }, 0);

      if (targetSum % 4 !== 0) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      validHeaders.push([...counter]);
    }

    increaseCounter();
  }

  const validMaps = validHeaders.map((header) => {
    const map = new Array(length).fill().map((_, idx) => {
      if (idx === 0) return header;

      return new Array(length).fill(null);
    });

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length; j++) {
        let sum = map[i][j];

        if (map[i][j + 1]) sum += map[i][j + 1];
        if (map[i][j - 1]) sum += map[i][j - 1];
        if (map[i - 1]) sum += map[i - 1][j];

        const resultValue = getFixedNum(clockHands[i][j] - sum);

        map[i + 1][j] = resultValue;
      }
    }

    return map;
  });

  return Math.min(
    ...validMaps.map((map) =>
      map.reduce((acc, cur) => {
        return (
          acc +
          cur.reduce((acc, cur) => {
            return acc + cur;
          }, 0)
        );
      }, 0)
    )
  );
}

solution([
  [0, 3, 3, 0],
  [3, 2, 2, 3],
  [0, 3, 2, 0],
  [0, 3, 3, 3],
]);
