function getSI(v, i) {
  let result = 0;
  for (let j = 0; j < v.length; j++) result += v[j] % i;
  return result;
}

function solution(data, col, row_begin, row_end) {
  let answer = 0;

  data.sort((a, b) => {
    const c = col - 1;
    if (a[c] === b[c]) return b[0] - a[0];
    return a[c] - b[c];
  });

  for (let i = row_begin; i <= row_end; i++) answer ^= getSI(data[i - 1], i);

  return answer;
}
