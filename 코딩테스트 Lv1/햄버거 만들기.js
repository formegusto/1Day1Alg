/**
 *
 * @param {array} ingredient
 * @returns
 */

// 이거 약간 그냥 빵쌓아놓고 올리는 느낌임
function solution(ingredient) {
  let answer = 0;

  let recipe = [1, 3, 2, 1];
  let memory = [];
  let makeQ = [];
  for (let i = 0; i < ingredient.length; i++) {
    // 현재 makeQ에 들어갈 수 있는 재료인가?
    if (recipe[makeQ.length] === ingredient[i]) {
      makeQ.push(ingredient[i]);
      while (
        makeQ.length < recipe.length &&
        memory.indexOf(recipe[makeQ.length]) !== -1
      )
        makeQ.push(memory[memory.indexOf(recipe[makeQ.length])]);
    } else memory.push(ingredient[i]);

    // 포장
    if (makeQ.length === recipe.length) {
      answer++;
      makeQ = [];
    }
  }

  return answer;
}

function solution2(ingredient) {
  let answer = 0;
  const workspace = [];

  for (let i = 0; i < ingredient.length; i++) {
    workspace.push(ingredient[i]);
    if (workspace.slice(-4).join("") === "1231") {
      workspace.splice(workspace.length - 4);
      answer++;
    }
  }

  return answer;
}

// console.log(solution2([1, 3, 2, 1, 2, 1, 3, 1, 2]), "\n");

function solution3(ingredient) {
  let answer = 0;
  const workspace = [];

  for (let i = 0; i < ingredient.length; i++) {
    workspace.push(ingredient[i]);
    if (workspace.slice(-4).join("") === "1231") {
      for (let j = 0; j < 4; j++) workspace.pop();
      answer++;
    }
  }

  return answer;
}

console.log(solution3([1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1, 2, 3, 1]), "\n");
