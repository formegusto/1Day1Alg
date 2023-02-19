function solution(elements) {
  const sumArr = [];
  sumArr.push(...elements);
  for (let i = 1; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      let sum;
      if (j) {
        sum = sumArr[(i - 1) * elements.length + (j - 1)] + elements[j];
      } else {
        sum = sumArr[i * elements.length - 1] + elements[j];
      }
      sumArr.push(sum);
    }
  }

  const set = new Set(sumArr);
  return set.size;
}
