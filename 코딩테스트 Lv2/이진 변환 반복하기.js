function solution(s) {
  let zeroCount = 0;
  let count = 0;

  while (true) {
    count++;

    const arr = [...s];
    const _zeroCount = arr.filter((v) => v === "0").length;

    zeroCount += _zeroCount;
    const nextSize = s.length - _zeroCount;
    s = nextSize.toString(2);
    if (s === "1") return [count, zeroCount];
  }
}

/*
or 사용해서 배열 붙이는 부분있음
*/
