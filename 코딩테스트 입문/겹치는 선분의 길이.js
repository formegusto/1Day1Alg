function solution(lines) {
  let line = Array(200).fill(0);
  let answer = 0;

  for (let i = 0; i < lines.length; i++) {
    let start = lines[i][0] + 100;
    let end = lines[i][1] + 100;

    for (let j = start; j < end; j++) line[j]++;
  }

  for (let i = 0; i < line.length; i++) {
    if (line[i] >= 2) answer++;
  }

  return answer;
}
