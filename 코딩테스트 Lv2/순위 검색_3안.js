function solution(info, query) {
  var answer = [];
  let map = {};

  function combination(infos, score, map, start) {
    let key = infos.join(""); // 키 값으로 쓸거 합쳐주기
    let value = map[key]; // 값 있는지 없는지 확인해주기

    if (value) {
      // 값이 있으면 push
      map[key].push(score);
    } else {
      // 값이 없으면 프로퍼티 만들어주기
      map[key] = [score];
    }

    // -를 이용해 조합 만들기
    for (let i = start; i < infos.length; i++) {
      let combiArr = [...infos]; // 전개연산자 ...
      combiArr[i] = "-";

      combination(combiArr, score, map, i + 1);
    }
  }

  // 1. -로 가능한 모든 조합 만들기
  for (let i = 0; i < info.length; i++) {
    let infos = info[i].split(" ");
    let score = infos.pop();

    combination(infos, score, map, 0);
  }

  console.log(map);
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
