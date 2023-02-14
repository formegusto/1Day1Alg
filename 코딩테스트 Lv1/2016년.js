function solution(a, b) {
  return new Date(2016, a - 1, b).toString().split(" ")[0].toUpperCase();
}
