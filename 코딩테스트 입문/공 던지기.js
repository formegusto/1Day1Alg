function solution(numbers, k) {
  let size = numbers.length;
  let idx = 0;
  while (true) {
    k--;
    if (!k) break;
    console.log(numbers[idx], "===>");
    idx = idx + 2;
    if (idx >= size) idx %= size;
    console.log("====>", numbers[idx]);
  }

  return numbers[idx];
}

solution([1, 2, 3, 4, 5, 6], 5);
// 신박한 답 있음! 확인바람!
