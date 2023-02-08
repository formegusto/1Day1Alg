function solution(i, j, k) {
  let answer = 0;

  const reg = new RegExp(`[${k}]`, "g");
  for (; i <= j; i++) {
    if (String(i).includes(k)) answer += String(i).match(reg).length;
  }

  return answer;
}

// ? 의외로 내꺼가 더 빠름

function solution2(i, j, k) {
  let answer = "";

  for (; i <= j; i++) answer += i;

  return answer.split(k).length - 1;
}

console.log(solution2(1, 13, 1));
