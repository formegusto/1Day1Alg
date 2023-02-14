function permutation(arr, r) {
  if (r === 1) return arr.map((v) => [v]);

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perms = permutation(rest, r - 1);
    const attached = perms.map((p) => [arr[i], ...p]);
    result.push(...attached);
  }

  return result;
}

function solution(number, k) {
  let perms = permutation(number, number.length - k);
  perms = perms.map((p) => Number(p.join(""))).sort((a, b) => b - a);

  return perms[0];
}

console.log(solution("1924", 2));
