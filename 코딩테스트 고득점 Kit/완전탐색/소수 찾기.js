function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i++) if (!(n % i)) return false;

  return true;
}

function permutation(arr, r) {
  const result = [];

  if (r === 1) return arr.map((v) => String(v));

  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perm = permutation(rest, r - 1);
    const attached = perm.map((p) => [arr[i], ...p].join(""));

    result.push(...attached);
  }

  return result;
}

function solution(string) {
  let answer = 0;

  let numbers = [...string].map(Number);
  let perms = [];
  for (let i = 1; i <= numbers.length; i++)
    perms.push(...permutation(numbers, i));

  numbers = [...new Set(perms.map(Number))];

  for (let i = 0; i < numbers.length; i++) if (isPrime(numbers[i])) answer++;

  return answer;
}

solution("17");
solution("011");
solution("345");

console.log(Math.sqrt(35));
