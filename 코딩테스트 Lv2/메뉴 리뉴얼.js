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

// function solution(orders, course) {
//   const answer = [];

//   const map = {};
//   for (let i = 0; i < orders.length; i++) {
//     for (let j = 0; j < course.length; j++) {
//       const comb = combination(orders[i], course[j]);
//       for (let k = 0; k < comb.length; k++) {
//         const c = comb[k].join("");
//         if (map[c] && map[c] !== -1) map[c]++;
//         else if (!map[c]) map[c] = 1;

//         if (map[c] >= 2) {
//           answer.push(c);
//           map[c] = -1;
//         }
//       }
//     }
//   }
// }

//   return answer;
// }
// function solution(orders, course) {
//   let answer = [];

//   orders.sort((a, b) => a.length - b.length);
//   let oi = 0;
//   let ci = 0;
//   while (ci < course.length) {
//     const c = course[ci++];

//     while (oi < orders.length && orders[oi].length <= c) {
//       let cnt = 1;
//       for (let i = oi + 1; i < orders.length; i++) {
//         const match = orders[i].match(new RegExp(`[${orders[oi]}]`, "g"));
//         if (match && match.length === c) cnt++;
//       }

//       if (cnt >= 2) answer.push(orders[oi]);
//       oi++;
//     }
//   }

//   return answer.sort();
// }

function solution(orders, course) {
  let answer = [];

  let maxValues = Array(course.length).fill(0);

  let map = {};
  orders.sort((a, b) => a.length - b.length);
  for (let i = 0; i < orders.length; i++) {
    for (let j = i + 1; j < orders.length; j++) {
      const match = orders[j].match(new RegExp(`[${orders[i]}]`, "g"));
      if (!match || match.length === 1) continue;

      for (let c = 0; c < course.length; c++) {
        if (match.length < course[c]) break;
        const comb = combination(match, course[c]);
        for (let k = 0; k < comb.length; k++) {
          const inData = comb[k].join("");
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
