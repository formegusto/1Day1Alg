const DICT = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function solution(s) {
  let answer = "";

  let key = "";
  for (let i = 0; i < s.length; i++) {
    key += s[i];

    let isNumber = key.charCodeAt(0) >= 48 && key.charCodeAt(0) <= 57;
    if (isNumber) {
      answer += key;
      key = "";
    } else if (DICT.hasOwnProperty(key)) {
      answer += DICT[key];
      key = "";
    }
  }

  return Number(answer);
}

console.log(solution("1235onetwofourzero2412"));

/*
이거 0 조심,
배열로 푸신분꺼 좋았음 먼가
*/
