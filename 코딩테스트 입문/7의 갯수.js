function solution(array) {
  return [...array.join("")].filter((v) => v === "7").length;
}
