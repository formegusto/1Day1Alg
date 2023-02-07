function solution(M, N) {
  let answer = 0;

  let nCount = 1;
  while (M > 1 || N > 1) {
    let count = 0;
    if (M > 1) {
      M--;
      count = 1;
      nCount++;
    } else {
      N--;
      count = nCount;
    }

    answer += count;
  }

  return answer;
}

// 엄청난 수열 공식이 있음,, 확인 바람!
