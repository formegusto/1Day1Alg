function solution(N, depth) {
  console.log("N :", N, "/", "depth :", depth);

  const dp = Array.from(
    {
      length: depth,
    },
    (_, i) => new Set([Number(String(N).repeat(i + 1))])
  );
  const expr = Array.from({ length: depth }, (_, i) => [
    String(N).repeat(i + 1),
  ]);

  for (let i = 1; i < depth; i++) {
    for (let j = 0; j < i; j++) {
      for (let op1 of expr[j]) {
        for (let op2 of expr[i - j - 1]) {
          expr[i].push(`${op1} + ${op2}`);
          expr[i].push(`${op1} - ${op2}`);
          expr[i].push(`${op1} * ${op2}`);
          expr[i].push(`${op1} / ${op2}`);
        }
      }
    }
    console.log(expr[i]);
  }
}

solution(2, 3);
