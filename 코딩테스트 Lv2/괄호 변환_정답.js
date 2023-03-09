//올바른 문자열인지 확인하는 함수
const is_right = (string) => {
  let index = 0;
  for (let st of string) {
    if (st === "(") index++;
    else {
      index--;
      //index가 음수이면 ')'가 더 많으므로 올바르지 않다
      if (index < 0) return false;
    }
  }
  //index가 양수이면 '('가 더 많으므로 올바르지 않다.
  return index === 0;
};

function solution(p) {
  if (is_right(p)) return p;
  const length = p.length;
  if (!length) return "";
  let u, v;
  for (let i = 0, tmp = 0; i < length; i++) {
    if (p[i] === "(") tmp++;
    else tmp--;
    if (!tmp) {
      //tmp가 0일때마다 문자열을 잘라준다.
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  }

  //u가 올바른 문자열이면 나머지 문자열로 재귀함수 실행
  if (is_right(u)) {
    return u + solution(v);
  }
  //4번 조건 실행
  return `(${solution(v)})${[...u.slice(1, -1)]
    .map((x) => (x === "(" ? ")" : "("))
    .join("")}`;
}

console.log(solution(")()()()("));
console.log(solution(")()(()))((()()"));
