function solution(numbers, direction) {
  switch (direction) {
    case "right":
      numbers.unshift(numbers.pop());
      break;
    case "left":
      numbers.push(numbers.shift());
      break;
  }

  return numbers;
}
