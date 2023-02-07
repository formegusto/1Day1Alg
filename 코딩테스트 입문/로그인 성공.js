function solution(id_pw, db) {
  // 아이디 일치여부
  let check = db.filter(([id, pw]) => id === id_pw[0]).length;
  if (!check) return "fail";

  // 비밀번호 조건 추가
  check = db.filter(([id, pw]) => id === id_pw[0] && pw === id_pw[1]).length;
  if (!check) return "wrong pw";

  return "login";
}

// Map 사용한거 있는데 확인해보기!
