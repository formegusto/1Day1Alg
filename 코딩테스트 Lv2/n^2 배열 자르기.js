function solution(n, left, right) {
  var answer = [];

  let jumpLeft = Math.floor(left / n);
  let jumpRight = Math.floor(right / n);

  for (let r = jumpLeft; r <= jumpRight; r++) {
    let v = r + 1;
    for (let c = 0; c < n; c++) {
      if (c < r) {
        answer.push(v);
      } else {
        answer.push(v++);
      }
    }
  }
  let restLeft = left % n;
  let restRight = restLeft + right - left;

  return answer.slice(restLeft, restRight + 1);
}

/*
나중에 풀이 신박한 거 이해해보기
*/
