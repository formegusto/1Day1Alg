function solution(array) {
  const max = Math.max.apply(null, array);
  return [max, array.indexOf(max)];
}
