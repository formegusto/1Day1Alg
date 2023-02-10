function solution(numbers) {
  const answer = numbers.map(() => -1);

  const stack = [];
  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && stack[stack.length - 1][0] < numbers[i]) {
      const popData = stack.pop();
      answer[popData[1]] = numbers[i];
    }
    stack.push([numbers[i], i]);
  }

  return answer;
}
