function combination(arr, r) {
  if (r === 1) return arr.map((v) => [v]);

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(i + 1)];
    const comb = combination(rest, r - 1);
    const attached = comb.map((p) => [arr[i], ...p]);

    result.push(...attached);
  }

  return result;
}

function solution(orders, course) {
  const answer = [];

  let m = {};
  for (let o = 0; o < orders.length; o++) {
    for (let c = 0; c < course.length; c++) {
      const combs = combination([...orders[o]].sort(), course[c]);
      for (let i = 0; i < combs.length; i++) {
        const inData = combs[i].join("");
        if (m[inData]) m[inData]++;
        else m[inData] = 1;
      }
    }
  }

  for (let c = 0; c < course.length; c++) {
    let max = 0;
    for (let key in m)
      if (key.length === course[c]) max = Math.max(max, m[key]);

    for (let key in m)
      if (key.length === course[c] && m[key] === max && max > 1)
        answer.push(key);
  }

  return answer.sort();
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]),
  "\n"
);
console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]),
  "\n"
);

// console.log("ACD".match(new RegExp(`[${"ADE"}]`, "g")));

console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]), "\n");
