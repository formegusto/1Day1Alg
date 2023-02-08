function solution(s1, s2) {
  return s1.reduce((acc, cur) => (s2.includes(cur) ? ++acc : acc), 0);
}

/*
filter 로도 가능함.
*/
