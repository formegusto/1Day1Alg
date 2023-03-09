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
  let answer = [];

  let maxValues = Array(course.length).fill(0);
  let memory = {};
  let map = {};
  orders.sort((a, b) => a.length - b.length);
  for (let i = 0; i < orders.length; i++) {
    for (let j = i + 1; j < orders.length; j++) {
      const match = orders[j].match(new RegExp(`[${orders[i]}]`, "g"));
      if (!match || match.length === 1) continue;
      if (memory[match]) {
        for (let m = 0; m < memory[match].length; m++) {
          map[memory[match][m]].add(i);
          map[memory[match][m]].add(j);
        }
        continue;
      }

      memory[match] = [];
      for (let c = 0; c < course.length; c++) {
        if (match.length < course[c]) break;
        const comb = combination(match, course[c]);
        for (let k = 0; k < comb.length; k++) {
          const inData = comb[k].join("");
          memory[match].push(inData);
          if (map[inData]) {
            map[inData].add(i);
            map[inData].add(j);
          } else map[inData] = new Set([i, j]);

          maxValues[c] = Math.max(map[inData].size, maxValues[c]);
        }
      }
    }
  }

  const keys = Object.keys(map);
  for (let i = 0; i < course.length; i++) {
    const filtered = keys.filter((k) => k.length === course[i]);
    for (let j = 0; j < filtered.length; j++) {
      if (maxValues[i] === map[filtered[j]].size) answer.push(filtered[j]);
    }
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
