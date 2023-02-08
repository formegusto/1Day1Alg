function solution(before, after) {
  for (let i = 0; i < after.length; i++) {
    const idx = before.indexOf(after[i]);
    if (idx === -1) return 0;
    before = before.replace(after[i], "");
  }
  return 1;
}
