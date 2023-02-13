function solution(x) {
  return !(x % [...x.toString()].reduce((acc, cur) => acc + Number(cur), 0));
}
