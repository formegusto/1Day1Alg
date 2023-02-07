function solution(array) {
  const m = {};

  for (let i = 0; i < array.length; i++) {
    if (m[array[i]]) m[array[i]]++;
    else m[array[i]] = 1;
  }

  const sorted = Object.entries(m).sort(([k1, v1], [k2, v2]) => v2 - v1);

  if (sorted?.[0][1] === sorted?.[1]?.[1]) {
    return -1;
  } else {
    return Number.parseInt(sorted[0][0]);
  }
}
