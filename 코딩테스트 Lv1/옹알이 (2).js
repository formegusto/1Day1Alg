const B = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
  var answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    let stack = [];
    let word = "";
    for (let j = 0; j < babbling[i].length; j++) {
      word += babbling[i][j];
      const idx = B.indexOf(word);
      if (idx !== -1) {
        if (stack[stack.length - 1] !== word) stack.push(word);
        word = "";
      }
    }

    if (stack.join("") === babbling[i]) answer++;
  }

  return answer;
}

console.log(solution(["aya", "yee", "u", "maa"]));
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));

/*
정규식 되는 부분 입니다. 난중에 확인
*/
