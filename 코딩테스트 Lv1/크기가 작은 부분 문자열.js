function solution(t, p) {
  const slices = [...t.slice(0, t.length + 1 - p.length)];
  const np = Number(p);

  return slices
    .map((_, i) => Number(t.slice(i, i + p.length)))
    .filter((v) => v <= np).length;
}
