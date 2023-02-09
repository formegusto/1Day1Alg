function solution(s) {
  const answer = [];
  const loc = {};

  for (let i = 0; i < s.length; i++) {
    if (loc[s[i]]) answer.push(i - loc[s[i]]);
    else answer.push(-1);
    loc[s[i]] = [i];
  }

  return answer;
}
