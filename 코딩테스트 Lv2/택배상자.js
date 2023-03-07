function solution(order) {
  if (order.length === 1) return 1;
  let num = order[0];
  const stack = Array.from(
    {
      length: order[0] - 1,
    },
    (_, i) => i + 1
  );

  let o = 0;
  while (true) {
    if (num === order[o]) {
      o++;
      num++;
    } else if (stack.length && stack[stack.length - 1] === order[o]) {
      o++;
      stack.pop();
    } else {
      stack.push(num++);
    }

    if (o >= order.length) break;
    else if (
      stack.length &&
      stack[stack.length - 1] !== order[o] &&
      num > order[o]
    )
      break;
  }

  return o;
}
