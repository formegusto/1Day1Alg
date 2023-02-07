function solution(my_str, n) {
  let answer = [];

  let i = 0;
  while (true) {
    answer.push(my_str.slice(i, i + n));
    if (i + n >= my_str.length) break;
    i += n;
  }

  return answer;
}
