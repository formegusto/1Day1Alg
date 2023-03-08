function permutation(arr, r) {
  if (r === 1) return arr.map((v) => [v]);

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perm = permutation(rest, r - 1);
    const attached = perm.map((p) => [arr[i], ...p]);

    result.push(...attached);
  }

  return result;
}

function getPrecFunc(op, priority) {
  const opMap = op.reduce((acc, cur, idx) => {
    acc[cur] = priority[idx];

    return acc;
  }, {});

  const prec = (_op) => {
    if (opMap[_op]) return opMap[_op];
    else return 999;
  };

  return prec;
}

function infixToPostfix(ex, prec) {
  const s = [];
  const c = [];
  let tmp = "";
  for (let i = 0; i < ex.length; i++) {
    const chr = ex.charAt(i);
    switch (chr) {
      case "+":
      case "-":
      case "*":
        while (s.length && prec(chr) <= prec(s[s.length - 1])) {
          tmp += s.pop();
          if (isNaN(s[s.length - 1])) {
            c.push(tmp);
            tmp = "";
          }
        }
        s.push(chr);
        break;
      default:
        tmp += chr;
        if (isNaN(ex.charAt(i + 1)) || i + 1 === ex.length) {
          c.push(tmp);
          tmp = "";
        }
        break;
    }
  }
  while (s.length) c.push(s.pop());
  return c;
}

function calc(c) {
  const s = [];
  for (let i = 0; i < c.length; i++) {
    if (isNaN(c[i])) {
      const num2 = parseFloat(s.pop());
      const num1 = parseFloat(s.pop());
      switch (c[i]) {
        case "+":
          s.push(num1 + num2);
          break;
        case "-":
          s.push(num1 - num2);
          break;
        case "*":
          s.push(num1 * num2);
          break;
      }
    } else s.push(c[i]);
  }

  return Math.abs(s[0]);
}

function solution(expression) {
  let answer = 0;

  const op = [...new Set([...expression.replace(/[0-9]/g, "")])];
  const ps = permutation(
    Array.from({ length: op.length }, (_, i) => i + 1),
    op.length
  );

  for (let i = 0; i < ps.length; i++) {
    const c = infixToPostfix(expression, getPrecFunc(op, ps[i]));
    answer = Math.max(answer, calc(c));
  }

  return answer;
}

solution("100-200*300-500+20");
