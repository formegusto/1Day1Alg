// function solution(w, h) {
//   let answer = w * h;
//   let prevSize = [0, 0];
//   for (let i = 1; i <= w; i++) {
//     let bw = i;
//     let bh = (h * bw) / w;

//     let [errBw, errBh] = [
//       Math.ceil(bw - prevSize[0]),
//       Math.ceil(bh - prevSize[1]),
//     ];

//     answer -= errBw * errBh;
//     prevSize = [bw, bh];
//   }

//   return answer;
// }
function getGCD(a, b) {
  [a, b] = [Math.max(a, b), Math.min(a, b)];
  while (b) [a, b] = [b, a % b];
  return a;
}

function solution(w, h) {
  let answer = w * h;

  const gcd = getGCD(w, h);
  [w, h] = [w / gcd, h / gcd];
  answer -= (w + h - 1) * gcd;

  return answer;
}

console.log(solution(8, 12));
console.log(solution(7, 3));
