function solution(s) {
  let answer = "";

  let start = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      start = 1;
      answer += " ";
      continue;
    }

    if (start % 2) answer += s[i].toUpperCase();
    else answer += s[i].toLowerCase();
    start++;
  }

  return answer;
}

solution("try hello world");
