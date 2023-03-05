// https://mgyo.tistory.com/185
function solution(n) {
  const result = [];
  function move(start, end) {
    result.push([start, end]);
  }

  function hanoi(N, start, end, sub) {
    if (N === 1) {
      move(start, end);
      return;
    } else {
      hanoi(N - 1, start, sub, end);
      move(start, end);
      hanoi(N - 1, sub, end, start);
    }
  }

  hanoi(n, 1, 3, 2);

  return result;
}

console.log(solution(2));
