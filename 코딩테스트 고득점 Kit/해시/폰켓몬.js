function solution1(nums) {
  const selectionMap = {};
  const size = nums.length;
  const maxSelectionSize = size / 2;

  let answer = 0;
  for (let i = 0; i < size; i++) {
    if (!selectionMap[nums[i]]) {
      selectionMap[nums[i]] = true;
      answer++;
    } else {
      continue;
    }

    if (answer >= maxSelectionSize) {
      break;
    }
  }

  return answer;
}

function solution2(nums) {
  const selectionMap = {};
  let i = nums.length;
  const maxSelectionSize = i / 2;

  let answer = 0;
  while (true) {
    if (--i < 0) break;
    if (!selectionMap[nums[i]]) {
      selectionMap[nums[i]] = true;
      answer++;
    } else {
      continue;
    }

    if (answer >= maxSelectionSize) {
      break;
    }
  }

  return answer;
}

const input1 = [3, 1, 2, 3]; // result : 2
const input2 = [3, 3, 3, 2, 2, 4]; // result : 3
const input3 = [3, 3, 3, 2, 2, 2]; // result : 2

console.time("Solution 1");
solution1(input1);
solution1(input2);
solution1(input3);
console.timeEnd("Solution 1");

console.time("Solution 2");
solution2(input1);
solution2(input2);
solution2(input3);
console.timeEnd("Solution 2");
