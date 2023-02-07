function solution(sides) {
  var answer = 0;

  // 가장 긴변이 sides 멤버에 있을 경우
  const maxIn = Math.max.apply(null, sides);
  // 다른변은 minIn과 더해져서 maxIn보다 커야함 하지만 maxIn보다는 커지면 안됨.
  // -> 그 때는 추가된 변이 긴 변이 되어버림
  const minIn = Math.min.apply(null, sides);
  // start number (maxIn - minIn + 1)
  const startNumber = maxIn - minIn;
  answer += maxIn - startNumber;

  // 가장 긴변이 새로들어올 side 일 경우
  const maxSum = maxIn + minIn - 1;
  answer += maxSum - maxIn;

  return answer;
}
