function solution(sides) {
  sides.sort((a, b) => a - b);

  const min = sides.shift();
  const max = sides.pop();

  return max < min + sides[0] ? 1 : 2;
}
