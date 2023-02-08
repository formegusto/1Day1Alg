function solution(arr, com) {
  const answer = [];

  for (let c = 0; c < com.length; c++) {
    const [i, j, k] = com[c];
    const slice = arr.slice(i - 1, j);
    slice.sort((a, b) => a - b);

    answer.push(slice[k - 1]);
  }

  return answer;
}
