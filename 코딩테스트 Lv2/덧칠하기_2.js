function solution(n, m, section) {
  let answer = 0;

  section.sort((a, b) => a - b);
  for (let i = section[0]; i <= n; i++) {
    let paint = [];
    for (let j = i; j < i + m && j <= n; j++) {
      if (section.length && j === section[0]) paint.push(section.shift());
    }
    if (paint.length) answer++;
  }

  return answer;
}

console.log(solution(100, 4, [1, 2, 3, 4, 6, 9, 98, 99, 100]));
