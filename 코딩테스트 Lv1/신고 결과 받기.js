function solution(id_list, report, k) {
  let counts = id_list.map(() => []);

  for (let i = 0; i < report.length; i++) {
    const [from, to] = report[i].split(" ");

    const toIdx = id_list.indexOf(to);
    if (!counts[toIdx].includes(from)) counts[toIdx].push(from);
  }
  counts = counts.filter((v) => v.length >= k);

  const mailCounts = id_list.map(() => 0);
  for (let i = 0; i < counts.length; i++) {
    const mailIdxes = counts[i].map((v) => id_list.indexOf(v));
    for (let j = 0; j < mailIdxes.length; j++) mailCounts[mailIdxes[j]]++;
  }

  return mailCounts;
}

// Map 이랑 Set 언제 한번 정리하기
