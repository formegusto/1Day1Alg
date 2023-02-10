/**
 *
 * @param {string} X
 * @param {string} Y
 */
function solution(X, Y) {
  const countX = Array(10).fill(0);
  const countY = Array(10).fill(0);
  let answer = "";

  for (let i = 0; i < X.length; i++) countX[X[i]]++;
  for (let i = 0; i < Y.length; i++) countY[Y[i]]++;

  for (let i = 9; i >= 0; i--) {
    let count = countX[i] > countY[i] ? countY[i] : countX[i];
    while (count) {
      if (answer === "0" && i === 0) return "0";
      answer += i;
      count--;
    }
  }

  return answer === "" ? "-1" : answer;
}

console.log(solution("5525", "1255"));
