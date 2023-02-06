function solution(priorities, location) {
  let answer = 0;
  let max = Math.max.apply(null, priorities);

  while (true) {
    const v = priorities.shift();

    if (max === v) {
      answer += 1;
      if (location) {
        location -= 1;
      } else {
        break;
      }
      max = Math.max.apply(null, priorities);
    } else {
      priorities.push(v);
      if (location) {
        location -= 1;
      } else {
        location = priorities.length - 1;
      }
    }
  }

  return answer;
}
