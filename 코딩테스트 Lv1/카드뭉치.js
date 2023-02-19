function solution(cards1, cards2, goal) {
  let idx = 0;
  const stack = [];
  while (cards1.length || cards2.length) {
    if (goal[idx] === cards1[0]) {
      stack.push(cards1.shift());
    } else if (goal[idx] === cards2[0]) {
      stack.push(cards2.shift());
    } else {
      return "No";
    }

    idx++;
    if (stack.length === goal.length) return "Yes";
  }
}
