// https://kang-james.tistory.com/entry/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%B0%B1%ED%8A%B8%EB%9E%98%ED%82%B9backtracking-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-N-Queen-%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4

function isAvailable(curPos, board) {
  const [r, c] = curPos;
  for (let i = 0; i < board.length; i++) {
    const [br, bc] = board[i];
    if (
      br === r || // 깉은 행
      bc === c || // 같은 열
      r - br === Math.abs(bc - c) // 대각
    )
      return false;
  }

  return true;
}

function solution(n) {
  let answer = 0;

  function NQueen(n, cnt, board) {
    if (cnt === n) {
      answer++;
      return;
    }

    for (let i = 0; i < n; i++) {
      const curPos = [cnt, i];
      if (isAvailable(curPos, board)) NQueen(n, cnt + 1, [...board, curPos]);
    }

    return;
  }

  NQueen(n, 0, []);
  return answer;
}

console.log(solution(4));

// ㅋㅋㅋ 이거 뭔데
/*
function solution(n) {
    // https://ko.wikipedia.org/wiki/%EC%97%AC%EB%8D%9F_%ED%80%B8_%EB%AC%B8%EC%A0%9C
    return [1, 0, 0, 2, 10, 4, 40, 92, 352, 724, 2680, 14200, 73712, 365596][n - 1]
}
*/
