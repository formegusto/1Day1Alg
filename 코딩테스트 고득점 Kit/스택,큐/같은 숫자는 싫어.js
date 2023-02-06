function solution(arr) {
  const answer = [];

  let i = 0;
  while (i < arr.length) {
    if (arr[i - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
    i++;
  }

  return answer;
}
