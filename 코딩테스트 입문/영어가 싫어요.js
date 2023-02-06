const DICT = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  zero: "0",
};

function solution(numbers) {
  let answer = "";

  let number = "";
  for (let i = 0; i < numbers.length; i++) {
    number += numbers[i];
    if (DICT[number]) {
      answer += DICT[number];
      number = "";
    }
  }

  return Number.parseInt(answer);
}
