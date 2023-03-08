function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];

  return sum;
}

function solution(queue1, queue2) {
  let qSum1 = getSum(queue1);
  let cur1 = 0;
  let qSum2 = getSum(queue2);
  let cur2 = 0;

  const limit = queue1.length * 3;
  for (let moveCnt = 0; moveCnt <= limit; moveCnt++) {
    if (qSum1 > qSum2) {
      const num = queue1[cur1++];
      queue2.push(num);
      qSum1 -= num;
      qSum2 += num;
    } else if (qSum1 < qSum2) {
      const num = queue2[cur2++];
      queue1.push(num);
      qSum2 -= num;
      qSum1 += num;
    } else return moveCnt;
  }

  return -1;
}

solution([1, 2, 1, 2], [1, 10, 1, 2]);
