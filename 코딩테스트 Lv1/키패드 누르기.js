function distance(a, b) {
  return a.reduce((acc, cur, idx) => acc + Math.abs(cur - b[idx]), 0);
}

const POSITION = Array.from(
  {
    length: 12,
  },
  (_, idx) => [Math.floor(idx / 3), idx % 3]
);

function solution(numbers, hand) {
  let answer = "";

  let handPos = {
    L: POSITION[9],
    R: POSITION[11],
  };
  for (let i = 0; i < numbers.length; i++) {
    let direction;
    let number = numbers[i] - 1;
    if (number === -1) number = 10;

    const nextPosition = POSITION[number];

    // 오른쪽 키패드
    if (number % 3 === 2) direction = "R";
    else if (number % 3 === 0) direction = "L";
    else {
      const leftDis = distance(handPos["L"], nextPosition);
      const rightDis = distance(handPos["R"], nextPosition);

      if (leftDis > rightDis) direction = "R";
      else if (leftDis < rightDis) direction = "L";
      else direction = hand === "left" ? "L" : "R";
    }

    handPos[direction] = nextPosition;
    answer += direction;
  }

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
