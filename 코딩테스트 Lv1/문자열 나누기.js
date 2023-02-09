function solution(s) {
  let answer = 0;

  let i = 0;

  let target = s[i];
  let targetCount = 1;

  let checkCount = 0;
  while (true) {
    while (i < s.length && targetCount !== checkCount) {
      i++;
      if (target === s[i]) targetCount++;
      else checkCount++;
    }
    answer++;

    target = s[++i];
    targetCount = 1;
    checkCount = 0;

    if (i >= s.length) break;
  }

  return answer;
}

/*
신선한 방법이 있는 것 같은데 확인해보기!
*/
