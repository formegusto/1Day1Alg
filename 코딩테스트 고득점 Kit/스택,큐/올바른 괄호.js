function solution(s) {
  let i = 0;
  let top = 0;
  while (s[i]) {
    switch (s[i++]) {
      case "(":
        top++;
        break;
      case ")":
        top--;
    }
    if (top < 0) return false;
  }

  return top === 0;
}
