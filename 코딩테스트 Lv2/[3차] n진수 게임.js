function solution(n, t, m, p) {
  let num = 0;
  let q = [];
  let cnt = 0;
  let result = [];
  while (result.length < t) {
    if (!q.length) {
      q.push(...num.toString(n));
      num++;
    }

    const speak = q.shift().toUpperCase();
    if ((cnt % m) + 1 === p) result.push(speak);
    cnt++;
  }

  return result.join("");
}

solution(16, 16, 2, 1);
