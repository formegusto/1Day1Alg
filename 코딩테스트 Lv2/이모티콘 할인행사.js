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

  for (let p = 0; p < perms.length; p++) {
    const perm = perms[p];
    const emoPer = emoticons.map((e, i) => [perm[i], e - e * (perm[i] / 100)]);
    let joinCount = 0;
    let joinMoney = 0;
    for (let u = 0; u < users.length; u++) {
      let [posPer, limit] = users[u];
      let userPrice = 0;
      let isPlus = false;
      for (let ep = 0; ep < emoPer.length; ep++) {
        const [disPer, disPrice] = emoPer[ep];
        if (posPer > disPer) continue;
        if (limit > userPrice + disPrice) {
          userPrice += disPrice;
        } else {
          isPlus = true;
          break;
        }
      }

      if (!isPlus) {
        joinMoney += userPrice;
        joinCount++;
      }
    }
  }

  return 0;
}

solution(
  [
    [40, 10000],
    [25, 10000],
  ],
  [7000, 9000]
);
