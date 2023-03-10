function solution(orders, course) {
  const answer = [];

  let m = {};
  function dfs(root, order, limit) {
    if (root.length === limit) {
      if (m[root]) m[root]++;
      else m[root] = 1;
    }

    for (let i = 0; i < order.length; i++) {
      if (root.includes(order[i]) || root[root.length - 1] > order[i]) continue;
      dfs(root + order[i], order, limit);
    }
  }

  for (let c = 0; c < course.length; c++) {
    for (let o = 0; o < orders.length; o++) {
      if (orders[o].length < course[c]) continue;
      dfs("", [...orders[o]].sort().join(""), course[c]);
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
