function solution(arr) {
  const totalSize = arr.length;
  let size = arr.length;

  const answer = [0, 0];
  while (size) {
    for (let i = 0; i < totalSize / size; i++) {}

    // const set = new Set();
    size /= 2;
  }

  return answer;
}

solution([
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
]);
