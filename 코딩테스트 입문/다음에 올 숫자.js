function solution(common) {
  let w1 = common[1] - common[0];
  let w2 = common[1] / common[0];

  let pred1 = common[1] + w1;
  let pred2 = common[1] * w2;

  return pred1 === common[2] && pred2 !== common[2]
    ? common[common.length - 1] + w1
    : common[common.length - 1] * w2;
}
