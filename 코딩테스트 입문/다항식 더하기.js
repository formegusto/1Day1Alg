function solution(polynomial) {
  const [x, c] = polynomial.split(" + ").reduce(
    (acc, cur) => {
      let accIdx = 1;
      if (cur[cur.length - 1] === "x") {
        cur = cur.length === 1 ? "1" : cur.slice(0, -1);
        accIdx = 0;
      }
      acc[accIdx] += Number(cur);
      return acc;
    },
    [0, 0]
  );
  const newOper = [];
  if (x) newOper.push(x === 1 ? "x" : `${x}x`);
  if (c) newOper.push(c);

  let answer = newOper.join(" + ");

  return answer.length ? answer : 0;
}
