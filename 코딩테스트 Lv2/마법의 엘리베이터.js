// 음수가 유리한지 양수가 유리한지 계속해서 계산해가면서 도달한다.
/*
storey 의 각 자릿값에 따라 마법의 돌의 사용 횟수를 계산할 수 있다.

만약 현재 자릿값이 6 ~ 9 에 해당한다면 10 에 도달하는 방향으로 마법의 돌을 사용한다.
만약 현재 자릿값이 0 ~ 4 에 해당한다면 0 에 도달하는 방향으로 마법의 돌을 사용한다.
만약 현재 자릿값이 5 에 해당한다면 다음 자릿값에 따라 이동하는 방향을 정할 수 있다.
3-1. 만약 다음 자릿값이 5 ~ 9에 해당한다면 현재 자릿값을 10 에 도달하는 방향으로 마법의 돌을 사용한다.
3-2. 만약 다음 자릿값이 0 ~ 4에 해당한다면 현재 자릿값을 0 에 도달하는 방향으로 마법의 돌을 사용한다.
*/
function solution(storey) {
  storey = String(storey);
  storey = [...storey].reverse();

  let answer = 0;
  for (let i = 0; i < storey.length; i++) {
    const now = +storey[i];
    if (now === 5) {
      answer += 5;
      if (i < storey.length - 1) {
        if (+storey[i + 1] >= 5) storey[i + 1] = String(+storey[i + 1] + 1);
      }
    } else if (now > 5) {
      answer += 10 - now;
      if (i === storey.length - 1) {
        storey.push("0");
      }
      storey[i + 1] = String(+storey[i + 1] + 1);
    } else {
      answer += now;
    }

    console.log(i, now, answer);
  }

  console.log(answer);

  return answer;
}

solution(646);
