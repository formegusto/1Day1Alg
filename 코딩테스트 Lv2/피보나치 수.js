function solution(n) {
  let fibo1 = 0;
  let fibo2 = 1;
  for (let i = 2; i <= n; i++) {
    let tmp = fibo2;
    fibo2 += fibo1;
    fibo1 = tmp;

    fibo2 %= 1234567;
    fibo1 %= 1234567;
  }
  return fibo2;
}

// for (let i = 2; ; i++) {
//   if (Number.isNaN(solution(i))) {
//     console.log(i);
//     break;
//   }
// }

console.log(solution(1477));
