function solution(my_string, n) {
  return [...my_string].reduce((acc, cur) => acc + cur.repeat(n), "");
}
