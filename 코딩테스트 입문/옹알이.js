const BABBLING = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
  let answer = 0;

  let i = 0;
  while (babbling[i]) {
    let b = babbling[i];
    let size = 0;
    let j = 0;
    while (BABBLING[j]) {
      let idx = b.indexOf(BABBLING[j]);
      if (idx !== -1) {
        size += BABBLING[j].length;
      }
      if (b.length === size) {
        answer++;
        break;
      }
      j++;
    }
    i++;
  }

  return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
