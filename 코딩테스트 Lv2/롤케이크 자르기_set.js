function solution(topping) {
  var answer = 0;

  let sliceI = 1;
  let leftSet, rightSet;
  do {
    leftSet = new Set(topping.slice(0, sliceI));
    rightSet = new Set(topping.slice(sliceI));
    console.log(leftSet, rightSet);
    if (leftSet.size === rightSet.size) answer++;
    sliceI++;
  } while (rightSet.size >= leftSet.size);

  return answer;
}

solution([1, 2, 1, 3, 1, 4, 1, 2]);
