function solution(n, m, section) {
  let answer = 0;

  section.sort((a, b) => a - b);
  let pos = section[0];
  while (true) {
    if (pos + m > n && section.length) {
      answer++;
      break;
    }

    while (section.length && pos + m > section[0]) section.shift();
    answer++;
    pos += m;

    if (!section.length) break;
  }

  return answer;
}

console.log(solution(4, 2, [1, 4]));
