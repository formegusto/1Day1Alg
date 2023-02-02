function solution1(clothes) {
  let answer = 1;
  const kinds = {};

  for (let [_, kind] of clothes) {
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

function solution2(clothes) {
  let answer = 1;
  const kinds = {};

  for (let i = 0; i < clothes.length; i++) {
    if (kinds[clothes[i][1]]) {
      kinds[clothes[i][1]]++;
    } else {
      kinds[clothes[i][1]] = 1;
    }
  }

  for (let kind in kinds) {
    answer *= kinds[kind] + 1;
  }

  return answer - 1;
}

function solution3(clothes) {
  let answer = 1;
  const kinds = {};

  let i = 0;
  while (i < clothes.length) {
    if (kinds[clothes[i][1]]) {
      kinds[clothes[i++][1]]++;
    } else {
      kinds[clothes[i++][1]] = 1;
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

console.time("Solution 1");
solution1(input1);
solution1(input2);
console.timeEnd("Solution 1");

console.time("Solution 2");
solution2(input1);
solution2(input2);
console.timeEnd("Solution 2");

console.time("Solution 3");
solution3(input1);
solution3(input2);
console.timeEnd("Solution 3");
