function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    for (let j = num + 1; ; j++) {
      const err = [...(num ^ j).toString(2)].filter((v) => v === "1");
      if (err.length <= 2) {
        answer.push([i, j, j - num]);
        break;
      }
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

console.log(
  solution(
    Array.from(
      {
        length: 100,
      },
      (_, idx) => 100 + idx
    )
  )
);
