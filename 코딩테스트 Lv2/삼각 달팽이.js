function solution(n) {
  const arr = Array.from(
    {
      length: n,
    },
    (_, i) => Array(i + 1).fill(0)
  );

  let num = 1;
  let r = -1,
    c = 0;
  for (let i = n; i > 0; i -= 3) {
    for (let j = 0; j < i; j++) arr[++r][c] = num++;
    for (let j = 0; j < i - 1; j++) arr[r][++c] = num++;
    for (let j = 0; j < i - 2; j++) arr[--r][--c] = num++;
  }

  return arr.flat();
}

solution(4);
