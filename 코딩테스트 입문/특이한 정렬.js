function solution(numlist, n) {
  let answer = [];

  // num + distance list
  let numDisList = numlist.map((v) => [v, Math.abs(v - n)]);
  numDisList.sort((a, b) =>
    a[1] === b[1] ? (a[0] > b[0] ? -1 : 1) : a[1] - b[1]
  );
  answer = numDisList.map(([v]) => v);

  return answer;
}
