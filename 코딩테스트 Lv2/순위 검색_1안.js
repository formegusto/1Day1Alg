function solution(info, query) {
  let answer = [];

  const datas = [];
  for (let i = 0; i < info.length; i++) {
    let [lang, position, career, food, score] = info[i].split(" ");
    score = Number(score);

    datas.push({
      lang,
      position,
      career,
      food,
      score,
    });
  }

  const queryKey = ["lang", "position", "career", "food"];
  for (let i = 0; i < query.length; i++) {
    const queries = query[i].split(" and ");
    let score = 0;
    [queries[3], score] = queries[3].split(" ");
    score = Number(score);

    let filtered = datas.filter((d) => d.score >= score);
    for (let q = 0; q < queries.length; q++) {
      if (queries[q] === "-") continue;
      filtered = filtered.filter((f) => f[queryKey[q]] === queries[q]);
    }

    answer.push(filtered.length);
  }

  return answer;
}

// 효율성 시간초과
