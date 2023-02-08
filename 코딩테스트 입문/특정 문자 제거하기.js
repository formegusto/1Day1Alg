function solution(my_string, letter) {
  return my_string.replace(new RegExp(`[${letter}]`, "g"), "");
}

// split 사용방법도 있음!
