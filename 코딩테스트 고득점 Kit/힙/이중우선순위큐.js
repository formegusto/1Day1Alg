function solution(operations) {
  let answer = [];

  const queue = [];
  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "D 1":
        queue.pop();
        break;
      case "D -1":
        queue.shift();
        break;
      default:
        let num = Number(operations[i].split(" ")[1]);
        queue.push(num);
        queue.sort((a, b) => a - b);
    }
  }

  if (queue.length) answer = [queue.pop(), queue.shift()];
  else answer = [0, 0];

  return answer;
}
