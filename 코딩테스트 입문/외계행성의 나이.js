function solution(age) {
  let answer = "";
  const strAge = String(age);

  for (let i = 0; i < strAge.length; i++)
    answer += String.fromCharCode(strAge.charCodeAt(i) + 49);

  return answer;
}

// 문제 잘 보면 쉽게 풀 수 있는 방법 답안에 있음
