function combination(arr, selectNumber) {
  if (selectNumber === 1) return arr.map((v) => [v]);

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(i + 1)];
    const perms = combination(rest, selectNumber - 1);
    const attached = perms.map((p) => [arr[i], ...p]);

    result.push(...attached);
  }

  return result;
}

function solution(number) {
  let coms = combination(number, 3);

  coms = coms.filter((p) => !p.reduce((acc, cur) => acc + cur, 0));

  return coms.length;
}

solution([-2, 3, 0, 2, -5]);
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
