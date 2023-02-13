function solution(s) {
  s = s.toLowerCase();
  const pCount = [...s].filter((_s) => _s === "p").length;
  const yCount = [...s].filter((_s) => _s === "y").length;

  return pCount === yCount;
}
