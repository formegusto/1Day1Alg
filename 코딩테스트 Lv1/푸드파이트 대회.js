function solution(food) {
  let answer = "";

  let part1 = "";
  let part2 = "";
  for (let i = 1; i < food.length; i++) {
    const count = Math.floor(food[i] / 2);

    if (count) {
      const strCount = i.toString().repeat(count);
      part1 += strCount;
      part2 = strCount + part2;
    }
  }

  return part1 + "0" + part2;
}

console.log(solution([1, 7, 1, 2]));

// reverse 사용하면 댐
