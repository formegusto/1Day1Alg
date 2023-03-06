function combination(arr, selectNum) {
  if (selectNum === 1) return arr.map((v) => [v]);

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = arr.slice(i + 1);
    const comb = combination(rest, selectNum - 1);
    const attached = comb.map((c) => [arr[i], ...c]);

    result.push(...attached);
  }

  return result;
}

function solution(relation) {
  const candidates = [];
  const colSize = relation[0].length;
  const idxes = relation[0].map((_, i) => i);

  for (let size = 1; size <= colSize; size++) {
    const combs = combination(idxes, size);

    for (let i = 0; i < combs.length; i++) {
      const comb = combs[i];

      let isPos = true;
      for (let c = 0; c < candidates.length; c++) {
        let count = 0;
        for (let k = 0; k < comb.length; k++) {
          if (new Set(candidates[c]).has(comb[k])) count++;
        }
        if (count === candidates[c].length) {
          isPos = false;
          break;
        }
      }
      if (!isPos) continue;

      const set = new Set();
      for (let row = 0; row < relation.length; row++)
        set.add(comb.reduce((acc, cur) => acc + relation[row][cur], ""));

      if (set.size === relation.length) candidates.push(comb);
    }
  }

  return candidates.length;
}

solution([
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
]);

solution([
  ["a", "1", "aaa", "c", "ng"],
  ["a", "1", "bbb", "e", "g"],
  ["c", "1", "aaa", "d", "ng"],
  ["d", "2", "bbb", "d", "ng"],
]);

// console.log(combination([0, 1, 2, 3], 4));
// console.log(combination([0, 1, 2, 3], 3));
// console.log(combination([0, 1, 2, 3], 2));
// console.log(combination([0, 1, 2, 3], 1));
