function solution(k, score) {
  let answer = [];

  let queue = [];
  for (let i = 0; i < score.length; i++) {
    if (queue.length < k) {
      queue.push(score[i]);
      queue.sort((a, b) => a - b);
    } else {
      if (queue[0] < score[i]) {
        queue.shift();
        queue.push(score[i]);
        queue.sort((a, b) => a - b);
      }
    }
    answer.push(queue[0]);
  }

  return answer;
}

/*
수정 필요함.
*/
