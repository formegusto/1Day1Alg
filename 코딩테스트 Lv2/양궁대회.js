// https://blog.yjyoon.dev/kakao/2022/01/17/kakao-2022-blind-04/

let answer = [-1];
let prevWinScore = Number.MIN_SAFE_INTEGER;

function getScore(apeach, ryan) {
  let totalA = 0;
  let totalB = 0;

  for (let i = 0; i < 11; i++) {
    const score = 10 - i;
    const [a, b] = [apeach[i], ryan[i]];
    if (a > b) totalA += score;
    else if (b > a) totalB += score;
    else {
      if (a && b) totalA += score;
    }
  }

  return [totalA, totalB];
}

// 약간 나는 너보다 무조건 한 발씩 더 쏜다 마인드로 가면 됨

function combination(idx, arrows, apeach, ryan) {
  if (idx === 11 || arrows === 0) {
    ryan[10] += arrows;
    // console.log(ryan);
    const [apeachScore, ryanScore] = getScore(apeach, ryan);
    const err = ryanScore - apeachScore;

    if (err > 0) {
      if (prevWinScore < err) {
        answer = [...ryan];
        prevWinScore = err;
      } else if (prevWinScore === err) {
        for (let i = 10; i >= 0; i--) {
          if (answer[i] === ryan[i]) continue;
          else if (answer[i] > ryan[i]) break;
          else {
            answer = [...ryan];
            break;
          }
        }
      }
    }
    ryan[10] = 0;
    return;
  }

  // 높은 점수에서 쏠 수 있다면,
  if (apeach[idx] < arrows) {
    ryan[idx] = apeach[idx] + 1;
    combination(idx + 1, arrows - apeach[idx] - 1, apeach, ryan);

    // 복구
    ryan[idx] -= apeach[idx] + 1;
  }

  // 계속 늘려가는 거임
  combination(idx + 1, arrows, apeach, ryan);
}

function solution(n, info) {
  let ryan = Array.from(
    {
      length: 11,
    },
    () => 0
  );
  combination(0, n, info, ryan);
  return answer;
}

// console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));

// console.log(
//   getScore([0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1], [1, 1, 2, 3, 1, 0, 0, 0, 0, 0, 1])
// );

// DFS로도 푸신분이 계씬다! 너도 도전해보기
