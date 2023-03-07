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

function getCaseCount(n) {
  if (n === 1) return n;

  return n * getCount(n - 1);
}

function solution(n, k) {
  let arr = Array.from(
    {
      length: n,
    },
    (_, i) => i + 1
  );
  const answer = [];
  while (n) {
    const totalCase = getCaseCount(n);
    const caseCount = totalCase / n;
    const caseNum = Math.ceil(k / caseCount);

    answer.push(arr[caseNum - 1]);
    arr = [...arr.slice(0, caseNum - 1), ...arr.slice(caseNum)];

    k %= caseCount;
    if (!k) k = caseCount;
    n--;
  }

  return answer;
}

solution(4, 6);
console.log(
  permutation(
    Array.from({ length: 3 }, (_, i) => i + 1),
    3
  )
);
