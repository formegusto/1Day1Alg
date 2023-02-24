function solution(keymap, targets) {
  const keyHash = {};
  for (let i = 0; i < keymap.length; i++) {
    for (let j = 0; j < keymap[i].length; j++) {
      const ch = keymap[i][j];
      if (!keyHash[ch] || keyHash[ch] > j) {
        keyHash[ch] = j + 1;
      }
    }
  }

  const answer = [];
  for (let i = 0; i < targets.length; i++) {
    let pressCnt = 0;
    for (let j = 0; j < targets[i].length; j++) {
      let cnt = keyHash[targets[i][j]];
      if (cnt) pressCnt += cnt;
      else {
        pressCnt = -1;
        break;
      }
    }

    answer.push(pressCnt);
  }

  return answer;
}

solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]);
