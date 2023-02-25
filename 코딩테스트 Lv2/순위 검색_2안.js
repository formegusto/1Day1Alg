function combination(arr, sn) {
  if (sn === 1) {
    return arr.map((a) => [a]);
  }

  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const rest = [...arr.slice(i + 1)];
    const combs = combination(rest, sn - 1);
    const attached = combs.map((c) => [arr[i], ...c]);

    result.push(...attached);
  }

  return result;
}

function solution(info, query) {
  let answer = [];

  const datas = { "": [] };
  for (let i = 0; i < info.length; i++) {
    let [score, ...rest] = info[i].split(" ");
    datas[""].push(score);
    rest = rest.reverse();

    const keys = [];
    for (let j = 1; j <= 4; j++) {
      const combs = combination(rest, j);
      keys.push(...combs);
    }

    for (let key of keys) {
      const k = key.join("");
      console.log(k);
      if (datas[k]) datas[k].push(score);
      else datas[k] = [score];
    }
  }

  for (let i = 0; i < query.length; i++) {
    let q = query[i].replace(/ and /g, "").split(" ");
    let score = Number(q.pop());

    q = q.filter((_q) => _q !== "-");
    q = q.join("");

    if (datas[q]) {
      const result = datas[q].filter((d) => d >= score);
      answer.push(result.length);
    } else {
      answer.push(0);
    }
  }

  return answer;
}

solution(
  [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
  ],
  [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
  ]
);
