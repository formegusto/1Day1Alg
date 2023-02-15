function solution(n) {
  let bn = n.toString(2);
  while (true) {
    n++;

    let nextN = n.toString(2);

    let bnSize = [...bn].filter((v) => v === "1").length;
    let nextSize = [...nextN].filter((v) => v === "1").length;

    if (bnSize === nextSize) return n;
  }
}

/*
재귀로도 풀 수 있는 놀라운 사실,,
*/
