// https://velog.io/@bjy100/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-Level-3.-%EC%9E%85%EA%B5%AD%EC%8B%AC%EC%82%AC
/*
반복문을 돌며 심사할 수 있는 사람 수와 기다리는 사람 수를 비교한다.
6-1. 심사할 수 있는 사람 수 ≥ 기다리는 사람 수
: 주어진 시간 안에 해결 가능 → 시간 줄이기
6-2. 심사할 수 있는 사람 수 < 기다리는 사람 수
: 더 많은 시간이 있어야 해결 가능 → 시간 늘리기
*/
function solution(n, times) {
  times.sort((a, b) => a - b);

  let min = 1;
  let max = n * times[times.length - 1];

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let people = 0;
    for (let i = 0; i < times.length; i++) people += Math.floor(mid / times[i]);

    people >= n ? (max = mid - 1) : (min = mid + 1);
  }

  return min;
}
