function solution(k, d) {
  let answer = 0;

  let d2 = d ** 2;
  for (let i = 0; i <= d; i += k) {
    if (i) {
      let err = d2 - i ** 2;
      err = Math.sqrt(err) / k;
      err = Math.floor(err);
      answer += err + 1;
    } else {
      let err = Math.floor(d / k);
      answer += err + 1;
    }
  }

  return answer;
}
