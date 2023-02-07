// [작업이 요청되는 시점, 작업의 소요시간]
/**
 *
 * @param {array} jobs
 */
function solution(jobs) {
  const waitings = [];
  const size = jobs.length;
  jobs.sort((a, b) => a[0] - b[0]);

  let time = 0;
  let complete = 0;
  let totalTime = 0;

  while (jobs.length || waitings.length) {
    while (jobs.length && jobs[0][0] === time) {
      waitings.push(jobs.shift());
      waitings.sort((a, b) => a[1] - b[1]);
    }
    if (waitings.length && time >= complete) {
      const exec = waitings.shift();
      complete = time + exec[1];
      totalTime += complete - exec[0];
    }
    time++;
  }

  return (totalTime / size) >> 0;
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);
