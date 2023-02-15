function isRight(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "[":
      case "{":
      case "(":
        stack.push(s[i]);
        break;
      case "]":
        if (stack[stack.length - 1] !== "[") stack.push(s[i]);
        else stack.pop();
        break;
      case "}":
        if (stack[stack.length - 1] !== "{") stack.push(s[i]);
        else stack.pop();
        break;
      case ")":
        if (stack[stack.length - 1] !== "(") stack.push(s[i]);
        else stack.pop();
        break;
    }
  }

  return stack.length === 0;
}

function solution(s) {
  var answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (isRight(s)) answer++;
    s = s.slice(1) + s.slice(0, 1);
  }

  return answer;
}
