function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num % 2) {
      let ones = num.toString(2).split("0").pop();
      let err = 2 ** (ones.length - 1);
      let j = numbers[i] + err;
      answer.push([i, j, j - numbers[i]]);
    } else {
      answer.push([i, num + 1, 1]);
    }
  }

  return answer;
}

console.log(
  solution(
    Array.from(
      {
        length: 100,
      },
      (_, idx) => idx
    )
  )
);
