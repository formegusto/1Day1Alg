const getDay = (progress, speed) => Math.ceil((100 - progress) / speed);

function solution(progresses, speeds) {
  const answer = [1];
  let maxDay = getDay(progresses[0], speeds[0]);

  let i = 1;
  let a = 0;
  while (progresses[i]) {
    let day = getDay(progresses[i], speeds[i]);
    if (maxDay >= day) answer[a]++;
    else {
      maxDay = day;
      answer[++a] = 1;
    }
    i++;
  }

  return answer;
}
