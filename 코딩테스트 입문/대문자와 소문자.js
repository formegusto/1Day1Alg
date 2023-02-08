function solution(my_string) {
  return [...my_string].reduce(
    (acc, cur) => acc + String.fromCharCode(cur.charCodeAt(0) ^ 32),
    ""
  );
}

function solution(my_string) {
  return String.fromCharCode.apply(
    null,
    [...my_string].map((v) => v.charCodeAt(0) ^ 32)
  );
}
