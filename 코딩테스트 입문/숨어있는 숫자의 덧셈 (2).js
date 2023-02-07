/**
 *
 * @param {string} my_string
 * @returns number
 */
function solution(my_string) {
  const matches = my_string.match(/[0-9]+/gi);
  return matches ? matches.reduce((acc, cur) => acc + Number(cur), 0) : 0;
}

// 정규표현식 공부 필요

solution("aAb1B2cC34oOp");

console.log("aAb1B2cC34oOp".replace(/[a-z]/gi, " "));

const pattern = new RegExp(/[0-9]/gi);
console.log(pattern.exec("aAb1B2cC34oOp"));

console.log("abdafs".match(/[0-9]+/gi));
