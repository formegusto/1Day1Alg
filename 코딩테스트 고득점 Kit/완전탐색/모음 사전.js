function permutation(arr, r) {
  if (r === 1) return arr.map((v) => [v]);

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perms = permutation(rest, r - 1);
    const attached = perms.map((p) => [arr[i], ...p]);

    result.push(...attached);
  }

  return result;
}

const MAX_SIZE = 5;
const dict = "AEIOU";

function getIncrease(number, count) {
  return count <= 0 ? 1 : number ** count + getIncrease(number, count - 1);
}

function solution(word) {
  let answer = word.length;
  for (let i = 0; i < wordSize; i++) {
    const idx = dict.indexOf(word[i]);
    const increaseValue = getIncrease(5, MAX_SIZE - 1 - i);
    const increase = increaseValue * idx;
    answer += increase;
  }

  return answer;
}

function solution_check(word) {
  let count = 0;

  root: for (let a = 0; a < dict.length; a++) {
    console.log(`${++count}       ${dict[a]}`);
    for (let b = 0; b < dict.length; b++) {
      console.log(`${++count}       ${dict[a]}${dict[b]}`);
      for (let c = 0; c < dict.length; c++) {
        console.log(`${++count}       ${dict[a]}${dict[b]}${dict[c]}`);
        for (let d = 0; d < dict.length; d++) {
          console.log(
            `${++count}       ${dict[a]}${dict[b]}${dict[c]}${dict[d]}`
          );
          for (let e = 0; e < dict.length; e++) {
            if (count > 1000) break root;
            console.log(
              `${++count}       ${dict[a]}${dict[b]}${dict[c]}${dict[d]}${
                dict[e]
              }`
            );
          }
        }
      }
    }
  }
}

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
