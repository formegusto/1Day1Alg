function solution(arr) {
  if (arr.length <= 1) return [-1];

  const minValue = Math.min(...arr);
  return arr.filter((v) => v !== minValue);
}
