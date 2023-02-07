function solution(s) {
  let memory = {};
  for (let i = 0; i < s.length; i++) {
    if (memory[s[i]]) memory[s[i]]++;
    else memory[s[i]] = 1;
  }
  memory = Object.entries(memory)
    .filter(([_, count]) => count === 1)
    .map(([v]) => v);
  memory.sort();

  return memory.join("");
}

// indexOf랑 lastIndexOf를 이용하신 분이 계심
