const ImWinner = {
  2: "0",
  0: "5",
  5: "2",
};

function solution(rsp) {
  return [...rsp].map((v) => ImWinner[v]).join("");
}
