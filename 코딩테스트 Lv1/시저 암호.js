const ALPHABETS = {};

const Handler = {
  get(_, prop) {
    let [alphabet, incValue] = prop.split(":");
    const type = alphabet === alphabet.toLowerCase() ? "lower" : "upper";

    alphabet = alphabet.charCodeAt(0);
    incValue = Number(incValue);
    alphabet += incValue;

    if (
      (type === "lower" && alphabet >= 123) ||
      (type === "upper" && alphabet >= 91)
    )
      alphabet -= 26;

    return String.fromCharCode(alphabet);
  },
};

const INFINITY_ALPHABETS = new Proxy(ALPHABETS, Handler);

function solution(s, n) {
  return [...s].reduce(
    (acc, cur) =>
      cur === " " ? acc + cur : acc + INFINITY_ALPHABETS[cur + ":" + n],
    ""
  );
}

console.log(solution("zz Fc", 1));
console.log(solution("abcdefghij     klmnopqrstuvwxyz", 4));
console.log(solution("A".repeat(100), 25));
// console.log(
//   solution(
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZ ABCDEFGHIJKLMNOPQRSTUVWXYZ ABCDEFGHIJKLMNOPQRSTUVWXYZ ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghij     klmnopqrstuvwxyz".repeat(
//       100
//     ),
//     25
//   )
// );
