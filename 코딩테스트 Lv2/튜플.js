function solution(s) {
  s = s.replaceAll("{", "[").replaceAll("}", "]");
  const sArr = JSON.parse(s);
  sArr.sort((a, b) => a.length - b.length);

  const answer = [];
  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < sArr[i].length; j++) {
      if (!answer.includes(sArr[i][j])) answer.push(sArr[i][j]);
    }
  }

  return answer;
}
