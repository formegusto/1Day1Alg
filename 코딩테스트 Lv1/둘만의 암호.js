// /**
//  *
//  * @param {string} s
//  * @param {string} skip
//  * @param {number} index
//  * @returns {string}
//  */
// function solution(s, skip, index) {
//   let answer = "";

//   const asciiA = "a".charCodeAt(0);
//   const asciiZ = "z".charCodeAt(0);
//   const asciiSkip = [...skip].map((_, i) => skip.charCodeAt(i));
//   for (let i = 0; i < s.length; i++) {
//     let asciiChar = s.charCodeAt(i);
//     let convChar = asciiChar + index;

//     let appendIndex = asciiSkip.filter(
//       (v) => convChar >= v && asciiChar < v
//     ).length;
//     convChar += appendIndex;

//     console.log(s[i], asciiChar, convChar, appendIndex);
//     answer += String.fromCharCode(
//       asciiA + ((convChar - asciiA) % (asciiZ - asciiA + 1))
//     );
//   }
//   console.log(answer);

//   return answer;
// }

/**
 *
 * @param {string} s
 * @param {string} skip
 * @param {number} index
 * @returns {string}
 */
function solution(s, skip, index) {
  let answer = "";

  let stack;
  for (let i = 0; i < s.length; i++) {
    stack = [];
    let ascii = s.charCodeAt(i);
    while (queue.length < index) {
      if (ascii === 122) ascii = 96;
      let char = String.fromCharCode(++ascii);
      if (!skip.includes(char)) queue.push(char);
    }

    answer += stack.pop();
  }

  return answer;
}

solution("aukks", "wbqd", 5);

// alphabet 나열해서 진행핸거 있는데 괜찮은 거 같음
