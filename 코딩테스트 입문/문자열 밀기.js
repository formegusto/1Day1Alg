function solution(A, B) {
  let tmp = "";
  let aArr = [...A];
  for (let i = 0; i < A.length; i++) {
    if (aArr.join("") === B) return i;
    aArr.unshift(aArr.pop());
  }

  return -1;
}

// 굉장히 신박한 답이 있었음,,
