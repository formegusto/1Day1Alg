function solution(n, words) {
  let loser = 0;
  let count = 0;
  const stack = [];
  for (let i = 0; i < words.length; i++) {
    if (!(i % n)) count++;

    if (stack.length) {
      // 중복 체크
      if (stack.indexOf(words[i]) !== -1) {
        loser = (i % n) + 1;
        break;
      }

      // 올바른지 체크
      const lastWord = stack[stack.length - 1];
      if (lastWord[lastWord.length - 1] !== words[i][0]) {
        loser = (i % n) + 1;
        break;
      }
    }
    stack.push(words[i]);
  }

  return stack.length === words.length ? [0, 0] : [loser, count];
}

/*
특이한 답 있음
*/
