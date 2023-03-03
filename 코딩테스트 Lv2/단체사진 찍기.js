const MEMBER = ["A", "C", "F", "J", "M", "N", "R", "T"];
let CONDS = [];

function 내가너옆에서도될까(arr, newMem) {
  for (let i = 0; i < CONDS.length; i++) {
    const newArr = [...arr, newMem];
    const [m1, m2, cond, limit] = CONDS[i];
    const findIdx1 = newArr.indexOf(m1);
    const findIdx2 = newArr.indexOf(m2);
    if (findIdx1 === -1 || findIdx2 === -1) continue;
    switch (cond) {
      case "=":
        if (Math.abs(findIdx1 - findIdx2) !== limit + 1) return false;
        break;
      case ">":
        if (Math.abs(findIdx1 - findIdx2) <= limit + 1) return false;
        break;
      case "<":
        if (Math.abs(findIdx1 - findIdx2) >= limit + 1) return false;
        break;
    }
  }

  return true;
}

function solution(n, data) {
  let answer = 0;

  for (let i = 0; i < n; i++) {
    const [m1, _, m2, cond, limit] = data[i];

    CONDS.push([m1, m2, cond, +limit]);
  }

  function DFS(arr, cnt) {
    if (cnt === MEMBER.length) {
      if (answer < 3000) console.log(arr);
      answer++;
      return;
    }

    for (let i = 0; i < MEMBER.length; i++) {
      if (!arr.includes(MEMBER[i]) && 내가너옆에서도될까(arr, MEMBER[i])) {
        DFS([...arr, MEMBER[i]], cnt + 1);
      }
    }
  }

  DFS([], 0);

  return answer;
}

console.log("answer", solution(2, ["N~F=0", "R~T>2"]));
// console.log("answer", solution(2, ["M~C<2", "C~M>1"]));
