function permutation(arr, r) {
  if (r === 1) return arr.map((a) => [a]);

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perms = permutation(rest, r - 1);
    const attached = perms.map((p) => [arr[i], ...p]);

    result.push(...attached);
  }

  return result;
}

function solution(n, m) {
  const arr = Array.from(
    {
      length: n,
    },
    (_, i) => i + 1
  );
  const answer = permutation(arr, m);
  return answer;
}

console.log(solution(3, 1));
console.log(solution(4, 2));
console.log(solution(4, 3));
console.log(solution(4, 4));
