function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return true;
}

function solution(numbers) {
  let answer = [];
  let memoize = {};

  for (let i = 0; i < numbers.length; i++) {
    let num1 = numbers[i];
    // if (memoize[num1]) continue;
    // memoize[num1] = true;

    if (isPrime(Number(num1)) && !answer.includes(num1)) answer.push(num1);

    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue;
      else num1 += numbers[j];
      console.log(num1);
      if (isPrime(Number(num1)) && !answer.includes(num1)) answer.push(num1);
    }
  }

  return answer;
}

console.log(solution("143"), isPrime(431));
