function solution(numbers) {
  numbers.sort((a, b) =>
    String(a) + String(b) > String(b) + String(a) ? -1 : 1
  );

  // 0 제거
  //   for (; numbers.length > 1 && numbers[0] === 0; ) numbers = numbers.slice(1);

  // 알 수 없게도 되지 않는다.
  // return Number(numbers.join("")).toString();
  //   return numbers.join("");

  // 근데 사실 이것만 봐도됨
  const strNum = numbers.join("");
  return strNum[0] === "0" ? "0" : strNum;
}

console.log(solution([0, 0, 0, 0]));
console.log(solution([1, 11, 110, 1110]));

console.log(solution([12, 1213]));

// [1, 11, 110, 1110] -> "1111101110"
// 이렇게 나와야 테스트케이스 1~6 성공하네요.

// 근데 1111110110 이 나와야 하지 않나요..?
