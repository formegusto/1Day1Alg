function solution(n) {
  let ans = 0;

  while (n) {
    if (!(n % 2)) n /= 2;
    else {
      n -= 1;
      ans++;
    }
  }

  return ans;
}

/*
이진수로 푸는 방법 있었는데 너무 멋있드라,,
*/
