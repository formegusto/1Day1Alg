function solution(dot) {
  return dot[0] > 0 && dot[1] < 0 ? 4 : 7 ^ (4 ^ ((dot[0] > 0) + (dot[1] > 0)));
}
