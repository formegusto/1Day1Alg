function solution(angle) {
  let answer = angle / 90;
  if (Math.floor(answer) === answer) return answer * 2;
  else return Math.floor(answer) + 1 * Math.ceil(answer);
}

function solution2(angle) {
  return [0, 90, 91, 180].filter((v) => v <= angle).length;
}
