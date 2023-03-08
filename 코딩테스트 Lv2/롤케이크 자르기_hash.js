function solution(topping) {
  var answer = 0;

  const leftMap = { [topping[0]]: 1 };
  topping = topping.slice(1);
  const rightMap = topping.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});

  let t = 0;
  let leftSize = Object.keys(leftMap).length;
  let rightSize = Object.keys(rightMap).length;
  while (t < topping.length) {
    if (leftSize > rightSize) break;
    else if (leftSize === rightSize) answer++;

    const delRight = topping[t++];
    rightMap[delRight]--;
    if (rightMap[delRight] === 0) {
      rightSize--;
      delete rightMap[delRight];
    }

    if (leftMap[delRight]) leftMap[delRight]++;
    else {
      leftMap[delRight] = 1;
      leftSize++;
    }
  }

  return answer;
}

solution([1, 2, 1, 3, 1, 4, 1, 2]);
