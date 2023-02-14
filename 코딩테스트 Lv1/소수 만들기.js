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

function isPrime(values) {
  const value = values.reduce((acc, cur) => acc + cur, 0);

  console.log(value);
  if (value <= 1) return false;
  if (value === 2) return true;
  if (!(value % 2)) return false;

  for (let i = 3; i <= Math.sqrt(value); i++) if (!(value % i)) return false;

  return true;
}

function solution(nums) {
  let comb = combination(nums, 3);

  return comb.filter(isPrime).length;
}

solution([1, 2, 3, 4]);
