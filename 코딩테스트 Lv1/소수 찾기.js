function solution(n) {
  let arr = [0, 0, ...Array(n - 1).fill(1)];

  let count = 0;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) arr[j] = 0;
    }
  }

  return arr.filter((v) => v).length;
}
