function solution(begin, target, words) {
  let answer = 0;

  if (!words.includes(target)) return answer;

  const queue = [];
  queue.push([begin, 0]);

  while (queue.length) {
    const [now, cnt] = queue.shift();
    if (now === target) {
      answer = cnt;
      break;
    }

    const posWords = words.filter((v) => {
      let errCnt = 0;
      for (let i = 0; i < v.length; i++) {
        if (now[i] !== v[i]) errCnt++;
      }

      return errCnt === 1;
    });

    for (let i = 0; i < posWords.length; i++)
      queue.push([posWords[i], cnt + 1]);
  }

  return answer;
}

// solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
console.log(solution("aab", "aaa", ["aaa", "dot", "dog", "lot", "log", "cog"]));
// console.log(solution("hit", "cog", ["cog", "dot", "dog", "lot", "log", "hot"]));
// console.log(solution("hit", "cog", ["cog", "dot", "dog", "lot", "log", "tih"]));

// let begin = "hit";
// const arr = ["hot", "dot", "dog", "lot", "log", "cog", "hit"];

// const _begin = [...begin].join(",");
// const reg = new RegExp(`[^${_begin}]`, "g");
// console.log(
//   arr.filter((v) => {
//     const match = v.match(reg);

//     return match !== null && match.length === 1;
//   })
// );
