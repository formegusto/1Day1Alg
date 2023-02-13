function solution(n) {
  return Number([...n.toString()].sort((a, b) => b - a).join(""));
}
