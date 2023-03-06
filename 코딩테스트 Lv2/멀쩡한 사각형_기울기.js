function solution2(w, h) {
  let answer = w * h;

  console.log(answer);
  let result = 0;
  for (let i = 1; i <= w; i++) {
    result += Math.ceil((h / w) * i);
    answer -= Math.ceil((h / w) * i);
  }
  console.log(result, answer);

  return answer * 2;
}

function solution1(w, h) {
  const slope = h / w;
  let result = 0;

  console.log(h * w);
  for (let i = 1; i <= w; i++) {
    result += Math.ceil(slope * i);
  }
  console.log(result, h * w - result);

  return (h * w - result) * 2;
}

// console.log(solution(8, 12));
// console.log(solution(2, 3));
// console.log(solution(2, 2));
// console.log(solution(1, 0));
console.log(solution1(99999999, 99999999));
console.log(solution2(99999999, 99999999));
// console.log(solution(1, 10000));
// console.log(solution(1, 1));
// console.log(solution(7, 3));

// 12 8 80
// 2 2 2
// 1 10000 0
// 7 3 12
// 8 3 14
// 3 7 12
// 100000000 999999999 99999998800000002
// 5 3 8
