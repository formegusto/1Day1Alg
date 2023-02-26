function combination(info, score, map, start) {
  let key = info.join("");
  if (map[key]) map[key].push(score);
  else map[key] = [score];

  for (let i = start; i < info.length; i++) {
    const arr = [...info];
    arr[i] = "-";

    // console.log(arr);
    /*
    하나씩 - 로 바꾼값을 밑으로 보내주는 조합방식
    기존의 조합은 자르는 방식이었지만, 이는 그냥 바꾸는 방식
    어짜피 종료시점은 i와 info.length가 차이가 없을 때 돌지 않으면서 발생함
    ["-", "backend", "junior", "pizza"][("-", "-", "junior", "pizza")][
      ("-", "-", "-", "pizza")
    ][("-", "-", "-", "-")][("-", "-", "junior", "-")][
      ("-", "backend", "-", "pizza")
    ][("-", "backend", "-", "-")][("-", "backend", "junior", "-")][
      ("java", "-", "junior", "pizza")
    ][("java", "-", "-", "pizza")][("java", "-", "-", "-")][
      ("java", "-", "junior", "-")
    ][("java", "backend", "-", "pizza")][("java", "backend", "-", "-")][
      ("java", "backend", "junior", "-")
    ];
    */

    combination(arr, score, map, i + 1);
  }
}

function test(infos) {
  const info = infos.split(" ");
  const score = Number(info.pop());

  const dict = {};
  console.log(combination(info, score, dict, 0));
}

console.log(test("java backend junior pizza 150"));
