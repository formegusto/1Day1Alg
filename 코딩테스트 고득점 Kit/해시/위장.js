function solution(clothes) {
  let answer = 1;
  const kinds = {};

  for (let [name, kind] of clothes) {
    if (kinds[kind]) {
      kinds[kind]++;
    } else {
      kinds[kind] = 1;
    }
  }

  for (let kind in kinds) {
    answer *= kinds[kind] + 1;
  }

  return answer - 1;
}

const input1 = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]; // 5
const input2 = [
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"],
]; // 3

console.log(solution(input1));
console.log(solution(input2));
