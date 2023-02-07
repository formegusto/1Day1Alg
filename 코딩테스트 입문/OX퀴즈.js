function solution(quiz) {
  const answer = [];

  for (let i = 0; i < quiz.length; i++) {
    let [X, operator, Y, _, ZPred] = quiz[i].split(" ");
    X = Number.parseInt(X);
    Y = Number.parseInt(Y);
    ZPred = Number.parseInt(ZPred);

    let Z;
    switch (operator) {
      case "+":
        Z = X + Y;
        break;
      case "-":
        Z = X - Y;
        break;
    }

    if (Z === ZPred) answer.push("O");
    else answer.push("X");
  }

  return answer;
}

// 재미있는 풀이 많음!
