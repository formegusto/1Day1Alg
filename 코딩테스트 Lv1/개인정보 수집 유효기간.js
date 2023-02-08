function solution(today, terms, privacies) {
  const answer = [];

  const todayDate = new Date(today);

  for (let i = 0; i < privacies.length; i++) {
    const [createdAt, termType] = privacies[i].split(" ");
    const [y, m, d] = createdAt.split(".");

    const yErr = todayDate.getFullYear() - Number(y);
    const mErr = todayDate.getMonth() - Number(m) + 1;
    const dErr = todayDate.getDate() - Number(d);

    const errMonth = yErr * 12 + mErr;

    let [_, exRange] = terms.filter((v) => v[0] === termType)[0].split(" ");
    exRange = Number(exRange);

    if (errMonth > exRange || (errMonth === exRange && dErr >= 0)) {
      answer.push(i + 1);
    }
  }

  return answer;
}

/*
내일 다시 더 쉽게! 해보자!
*/
