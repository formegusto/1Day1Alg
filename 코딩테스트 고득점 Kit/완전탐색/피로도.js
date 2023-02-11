function permutation(arr, r) {
  const result = [];

  if (r === 1) return arr.map((v) => [v]);

  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perms = permutation(rest, r - 1);
    const attached = perms.map((p) => [arr[i], ...p]);

    result.push(...attached);
  }

  return result;
}

function solution(k, dungeons) {
  var answer = -1;

  const caseTrip = [];
  for (let i = 1; i <= dungeons.length; i++)
    caseTrip.push(...permutation(dungeons, i));
  caseTrip.sort((a, b) => b.length - a.length);

  // Let's Trip
  for (let i = 0; i < caseTrip.length; i++) {
    let initK = k;
    let j = 0;
    for (; j < caseTrip[i].length; j++) {
      const [minKPosEnter, piro] = caseTrip[i][j];

      if (minKPosEnter > initK) break;

      initK -= piro;
    }

    if (j === caseTrip[i].length && initK >= 0) return caseTrip[i].length;
  }
}

/**
 * DFS로도 풀 수 있음. 훨씬 빠름
 */
