function solution(k, m, score) {
  score.sort((a, b) => b - a);

  let total = 0;
  for (let i = 0; i < score.length; i += m) {
    let minScore = k;
    if (i + m > score.length) break;
    for (let j = i; j < i + m && j < score.length; j++)
      if (minScore > score[j]) minScore = score[j];

    total += minScore * m;
  }

  return total;
}

// solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
