function combination(info, score, map, start) {
  let key = info.join("");
  if (map[key]) map[key].push(score);
  else map[key] = [score];

  for (let i = start; i < info.length; i++) {
    const arr = [...info];
    arr[i] = "-";
    combination(arr, score, map, i + 1);
  }
}

function BinarySearch(list, target, left, right) {
  let mid = 0;

  while (left < right) {
    mid = Math.floor((left + right) / 2);

    if (list[mid] >= target) right = mid;
    else if (list[mid] < target) left = mid + 1;
  }

  return left;
}

function solution(infos, queries) {
  let answer = [];

  // 모든 조합 만들기
  const dict = {};
  for (let i = 0; i < infos.length; i++) {
    const info = infos[i].split(" ");
    const score = Number(info.pop());
    combination(info, score, dict, 0);
  }

  // Binary Search를 위한 정렬
  for (let k in dict) dict[k].sort((a, b) => a - b);

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i].replace(/ and /g, " ").split(" ");
    const score = Number(query.pop());
    const q = query.join("");

    if (dict[q]) {
      const start = BinarySearch(dict[q], score, 0, dict[q].length);
      answer.push(dict[q].length - start);
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

/*
이렇게 해볼 수도 있음.
https://github.com/yuneg11/Programmers-Solutions/tree/master/solutions/72412%20-%20%EC%88%9C%EC%9C%84%20%EA%B2%80%EC%83%89
*/
