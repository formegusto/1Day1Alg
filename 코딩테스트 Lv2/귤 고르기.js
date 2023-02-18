function solution(k, tangerine) {
  const tanSet = tangerine.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);

    return acc;
  }, {});
  const tanCount = Object.values(tanSet).sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < tanCount.length; i++) {
    count += tanCount[i];

    if (count >= k) return i ? i + 1 : 1;
  }
}

/*
이해가 안가는 부분이 있음.
k갯수를 딱 맞추어야 하는 문제인데
왜 count >= 가 성립이 되는지 이해가 안됨
count === 에 성립했을 때가 답이 아닌가 싶음.
내가 멍청한가봄 나중에 연구하기
*/
