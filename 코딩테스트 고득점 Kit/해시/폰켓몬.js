function solution(nums) {
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

const input1 = [3, 1, 2, 3]; // result : 2
const input2 = [3, 3, 3, 2, 2, 4]; // result : 3
const input3 = [3, 3, 3, 2, 2, 2]; // result : 2

console.log(solution(input1));
console.log(solution(input2));
console.log(solution(input3));
