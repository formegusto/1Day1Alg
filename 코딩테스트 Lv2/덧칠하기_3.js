function solution(n, m, section) {
  let answer = 0;

  while (section.length) {
    const start = section[0];

    const paint = [];
    for (let i = start; i <= n && i < start + m; i++) {
      if (section.length && section[0] === i) paint.push(section.shift());
    }

    if (paint.length) answer++;
  }

  return answer;
}

console.log(solution(100, 4, [1, 2, 3, 4, 6, 9, 98, 99, 100]));
