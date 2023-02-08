function solution(order) {
  return [...String(order)].filter((v) => v !== "0" && !(Number(v) % 3)).length;
}

// 정규화 사용가능
