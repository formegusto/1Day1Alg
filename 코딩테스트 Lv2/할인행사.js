function solution(want, number, discount) {
  const disDict = discount.slice(0, 9).reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);

    return acc;
  }, {});

  let answer = 0;
  for (let i = 9; i < discount.length; i++) {
    if (i >= 10) disDict[discount[i - 10]]--;
    if (disDict[discount[i]]) {
      disDict[discount[i]]++;
    } else {
      disDict[discount[i]] = 1;
    }

    let j = 0;
    for (; j < want.length; j++) {
      if (disDict[want[j]] !== number[j]) break;
    }
    if (j === want.length) answer++;
  }

  return answer;
}

solution(
  ["banana", "apple", "rice", "pork", "pot"],
  [3, 2, 2, 2, 1],
  [
    "chicken",
    "apple",
    "apple",
    "banana",
    "rice",
    "apple",
    "pork",
    "banana",
    "pork",
    "rice",
    "pot",
    "banana",
    "apple",
    "banana",
  ]
);
