// https://en.wikipedia.org/wiki/H-index
// https://khuelibrary.tistory.com/107
function solution(citations) {
  citations.sort((a, b) => b - a);

  let i = 0;
  for (; i < citations.length; i++) if (i + 1 > citations[i]) break;
  return i;
}
