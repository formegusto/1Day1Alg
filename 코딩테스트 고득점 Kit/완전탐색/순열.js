// permutation
// 서로 다른 n개의 원소를 가지고, 중복 없이 순서에 상관있게 r개의 원소를 선택 혹은 나열 한 것.
// nPr

/**
 *
 * @param {array} arr
 * @param {number} num
 * @returns {array}
 */
function getPermutations(arr, r) {
  const results = [];

  console.log(arr, r);

  if (r === 1) return arr.map((v) => [v]);

  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const permutations = getPermutations(rest, r - 1);
    console.log(permutations);
    const attached = permutations.map((v) => [arr[i], ...v]);

    results.push(...attached);
  }

  return results;
}

// 3P2
const arr1 = [1, 2, 3];
console.log(getPermutations(arr1, 2));
// [ [ 1, 2 ], [ 1, 3 ], [ 2, 1 ], [ 2, 3 ], [ 3, 1 ], [ 3, 2 ] ]

function getAllPermutations() {
  const arr = [1, 2, 3];

  const results = [];
  for (let r = 1; r <= arr.length; r++)
    results.push(...getPermutations(arr, r));

  console.log(results);
}

// getAllPermutations();
