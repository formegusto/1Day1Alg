function permutation(arr, r) {
  if (r === 1) return arr.map((v) => [v]);

  const result = [];
  for (let i = 0; i < r; i++) {
    const perms = permutation(arr, r - 1);
    const attched = perms.map((p) => [arr[i], ...p]);

    result.push(...attched);
  }
  return result;
}

function solution(users, emoticons) {
  const discounts = [40, 30, 20, 10];
  const perms = permutation(discounts, emoticons.length);

  let simulations = [];
  for (let p = 0; p < perms.length; p++) {
    const perm = perms[p];
    const emoPer = emoticons
      .map((e, i) => [perm[i], e - e * (perm[i] / 100)])
      .sort((a, b) => a[1] - b[1]);

    let plusMemCnt = 0;
    let totalBuyPrice = 0;
    for (let u = 0; u < users.length; u++) {
      const [per, limit] = users[u];

      let buy = 0;
      let isPlus = false;
      for (let ep = 0; ep < emoPer.length; ep++) {
        const [disPer, disPrice] = emoPer[ep];
        if (per > disPer) continue;

        const _buy = buy + disPrice;
        if (_buy >= limit) {
          isPlus = true;
          break;
        }

        buy = _buy;
      }

      if (isPlus) plusMemCnt++;
      else totalBuyPrice += buy;
    }

    simulations.push([plusMemCnt, totalBuyPrice]);
  }

  return simulations.sort((a, b) =>
    a[0] === b[0] ? b[1] - a[1] : b[0] - a[0]
  )[0];
}

// solution(
//   [
//     [40, 10000],
//     [25, 10000],
//   ],
//   [7000, 9000]
// );

solution(
  [
    [40, 2900],
    [23, 10000],
    [11, 5200],
    [5, 5900],
    [40, 3100],
    [27, 9200],
    [32, 6900],
  ],
  [1300, 1500, 1600, 4900]
);
