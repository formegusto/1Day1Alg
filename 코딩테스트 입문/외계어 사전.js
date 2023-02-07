function solution(spell, dic) {
  var answer = 2;

  for (let i = 0; i < dic.length; i++) {
    let s = [...spell];
    for (let j = 0; j < dic[i].length; j++) {
      let ch = dic[i][j];
      let check = s.indexOf(ch);
      if (check !== -1) s.splice(check, 1);
    }
    if (s.length === 0) {
      return 1;
    }
  }

  return answer;
}

// some, every remind
