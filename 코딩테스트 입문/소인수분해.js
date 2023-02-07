function solution(n) {
  var answer = [];

  let target = n;
  let i = 2;
  while (target > 1) {
    if (target % i === 0) {
      if (!answer.length || answer[answer.length - 1] !== i) answer.push(i);
      target /= i;
    } else {
      if (i === 2) i++;
      else if (i * i >= target) {
        answer.push(target);
        target /= target;
      } else {
        i += 2;
      }
    }
  }

  return answer;
}

// Set으로 중복제거할 수 있음.
