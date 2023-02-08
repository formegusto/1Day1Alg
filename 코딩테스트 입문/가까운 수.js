function solution(array, n) {
  var answer = array[0];

  for (let i = 1; i < array.length; i++) {
    let errA = Math.abs(answer - n);
    let errB = Math.abs(array[i] - n);
    if (errA > errB || (errA === errB && answer > array[i])) {
      answer = array[i];
    }
  }

  return answer;
}
