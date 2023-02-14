function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    if (!stack.length) {
      stack.push(number[i]);
      continue;
    }

    while (stack.length && k && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }

    stack.push(number[i]);
  }

  while (k) {
    stack.pop();
    k--;
  }

  return stack.join("");
}

console.log(solution("1924", 2));
console.log(solution("4321", 1, "432"));
