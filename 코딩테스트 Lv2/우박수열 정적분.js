// 사다리꼴 넓이 공식
// ((윗 변 + 아랫변) * 높이) / 2

// Collatz conjecture
function collatz(n) {
  const result = [n];
  while (n > 1) {
    if (!(n % 2)) n /= 2;
    else n = n * 3 + 1;

    result.push(n);
  }

  return result;
}

const yList = collatz(5);
console.log(yList);

const culCal = [];
culCal.push(0);

for (let i = 1; i < yList.length; i++) {
  const area = (yList[i - 1] + yList[i]) / 2;
  culCal.push(culCal[i - 1] + area);
}

console.log(culCal);
/*
[
  6, 3, 10, 5, 16,
  8, 4,  2, 1
]
*/

// ((윗 변 + 아랫변) * 높이) / 2
// 돌린 형태로 보면 됨
// ((6 + 3) * 1) / 2

// for(let i=1;i<yList.length;i++) {
//     console.
// }
