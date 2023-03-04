function getDivisors(a) {
  const d = [];
  for (let i = 1; i <= a; i++) if (!(a % i)) d.push(i);

  return d.reverse();
}

function getGCD(a, b) {
  [a, b] = [Math.max(a, b), Math.min(a, b)];

  while (b) [a, b] = [b, a % b];

  return a;
}

function getMultiGCD(arr) {
  if (arr.length === 1) return arr[0];

  let gcd = getGCD(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) gcd = getGCD(gcd, arr[i]);

  return gcd;
}

function check(d, target) {
  for (let i = 0; i < d.length; i++) {
    if (d[i] === 1) return d[i];
    let isDiv = false;
    for (let j = 0; j < target.length; j++) {
      // 이거 통과되는 이유점
      // if (!(target[i] % d[i])) {}
      if (!(target[j] % d[i])) {
        isDiv = true;
        break;
      }
    }

    if (!isDiv) {
      return d[i];
    }
  }
}

function solution(arrayA, arrayB) {
  const aGCD = getMultiGCD(arrayA);
  const aD = getDivisors(aGCD);
  const maxA = check(aD, arrayB);

  const bGCD = getMultiGCD(arrayB);
  const bD = getDivisors(bGCD);
  const maxB = check(bD, arrayA);

  if (maxA === 1 && maxB !== 1) return maxB;
  else if (maxB === 1 && maxA !== 1) return maxA;
  else if (maxA !== 1 && maxB !== 1) return Math.max(maxA, maxB);

  return 0;
}

// console.log(solution([10, 17], [5, 20]));
// console.log(solution([10, 20], [5, 17]));
// console.log(solution([14, 35, 119], [18, 30, 102]));
// console.log(solution([2, 2, 2, 4], [3, 3, 3, 2]));
