function solution(ps) {
  const stack = [];

  // 1. init
  const answer = [];
  for (let i = 0; i < ps.length; i++) answer.push(0);

  // 2. process
  let i = 0;
  let top = 0;

  while (i < ps.length) {
    let data = [ps[i], i + 1];
    if (top <= 0 || stack[top - 1][0] <= data[0]) {
      stack.push(data);
      top++;
    } else {
      while (top > 0 && stack[top - 1][0] > data[0]) {
        const popData = stack.pop();
        const time = data[1] - popData[1];

        answer[popData[1] - 1] = time;
        top--;
      }
      stack.push(data);
      top++;
    }

    i++;
  }

  // 마무리 정리
  while (stack.length) {
    const popData = stack.pop();
    const time = ps.length - popData[1];

    answer[popData[1] - 1] = time;
  }

  return answer;
}

console.log(solution([100, 2, 3, 2, 3, 4, 2, 3, 1, 3, 100, 3, 231, 23]));
console.log([100, 2, 3, 2, 3, 4, 2, 3, 1, 3, 100, 3, 231, 23].length);
