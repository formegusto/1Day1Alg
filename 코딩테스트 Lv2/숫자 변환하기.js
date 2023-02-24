function getCase1Cnt(x, y, n) {
  let i = 0;
  while (x < y) {
    i++;
    x += n;
  }
  return [i, x === y];
}

function getCase2Cnt(x, y) {
  let i = 0;
  while (x < y) {
    i++;
    w *= 2;
  }
  return [i, x === y];
}

function getCase3Cnt(x, y) {
  let i = 0;
  while (x < y) {
    i++;
    w *= 3;
  }
  return [i, x === y];
}

function solution(x, y, n) {
  const [cnt1, isCnt1] = getCase1Cnt(x, y, n);
  const [cnt2, isCnt2] = getCase2Cnt(x, y);
  const [cnt3, isCnt3] = getCase3Cnt(x, y);

  const cntArr = [];
  if (isCnt1) cntArr.push(cnt1);
  if (isCnt2) cntArr.push(cnt2);
  if (isCnt3) cntArr.push(cnt3);

  return cntArr.length ? Math.min(...cntArr) : -1;
}
