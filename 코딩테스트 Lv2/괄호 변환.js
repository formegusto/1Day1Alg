// dp 없는게 빠름 단순히 이전결과에 붙이는 작업이기 때문에

function isRight(u) {
  if (u[0] === ")") return false;
  return true;
}

function getUV(w) {
  let count = 0;
  for (let i = 0; i < w.length; i++) {
    if (w[i] === "(") count++;
    else count--;

    if (!count) {
      let u = w.slice(0, i + 1);
      let v = w.slice(i + 1);
      return [u, v];
    }
  }

  return ["", ""];
}

function switchChr(str) {
  return [...str].map((s) => (s === "(" ? ")" : "(")).join("");
}

function convert(w) {
  if (w === "") return "";
  const [u, v] = getUV(w);

  if (isRight(u)) return u + convert(v);
  else {
    const subU = convert(v);
    return "(" + subU + ")" + switchChr(u.slice(1, -1));
  }
}

function solution(p) {
  return convert(p);
}

// console.log(solution("(()())()"));
// console.log(solution("()))((()"));
// console.log(solution("))))(((("));
// console.log(solution(")()(()"));
console.log(solution(")()()()("));
console.log(solution(")()(()))((()()"));
