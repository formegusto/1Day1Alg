function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}

/**
 * 랭킹 중복허용도 알아보기
 * slice shallow copy, spread deep copy
 */
