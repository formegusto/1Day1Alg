const Trit = ["4", "1", "2"];

function solution(n) {
  if (!n) return "0";
  let answer = "";
  while (n > 0) {
    const rest = n % 3;
    answer = Trit[rest] + answer;

    n = rest ? Math.floor(n / 3) : Math.floor(n / 3) - 1;
  }
  return answer;
}

for (let i = 0; i < 12; i++) {
  console.log(i, solution(i));
}

/*
한 줄에 끝낸 답 있음
이거 그 예전에 칸토어가 도움된듯
*/
