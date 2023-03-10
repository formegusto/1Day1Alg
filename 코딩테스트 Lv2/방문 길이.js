const DIR = {
  U: [-1, 0],
  D: [1, 0],
  L: [0, -1],
  R: [0, 1],
};

function solution(dirs) {
  const map = Array.from(
    {
      length: 11,
    },
    () =>
      Array.from(
        {
          length: 11,
        },
        () => []
      )
  );

  let answer = 0;
  let [r, c] = [5, 5];
  for (let i = 0; i < dirs.length; i++) {
    const [dr, dc] = DIR[dirs[i]];
    const [nr, nc] = [r + dr, c + dc];

    if (nr < 0 || nr > 10) continue;
    if (nc < 0 || nc > 10) continue;

    const [to, from] = [`${nr}${nc}`, `${r}${c}`];
    if (!map[r][c].includes(to)) {
      map[r][c].push(to);
      map[nr][nc].push(from);
      answer++;
    }
    [r, c] = [nr, nc];
  }

  return answer;
}

solution("ULURRDLLU");
solution("LULLLLLLU");
