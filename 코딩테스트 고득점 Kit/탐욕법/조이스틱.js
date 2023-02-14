// [ 초깃값, 정답 ]
/**
 *
 * @param {string} init
 * @param {string} answer
 * @returns {number}
 */
function getMoveCount(init, answer, start, count, direction, depth) {
  if (init === answer) return 0;

  while (init[start] === answer[start]) {
    count++;
    if (direction === "left") {
      start--;
      if (start === -1) start = answer.length - 1;
    } else if (direction === "right") {
      start++;
      if (start === answer.length) start = 0;
    }
  }

  init = init.substring(0, start) + answer[start] + init.substring(start + 1);

  const leftStart = start ? start - 1 : answer.length - 1;
  const rightStart = start === answer.length - 1 ? 0 : start + 1;

  const leftCount = getMoveCount(init, answer, leftStart, 1, "left", depth + 1);
  const rightCount = getMoveCount(
    init,
    answer,
    rightStart,
    1,
    "right",
    depth + 1
  );

  console.log(depth);

  return count + Math.min(leftCount, rightCount);
}

function solution(name) {
  let answer = 0;
  let initName = "A".repeat(name.length);

  answer += getMoveCount(initName, name, 0, 0, null, 1);
  for (let i = 0; i < name.length; i++) {
    if (name[i] !== "A")
      answer += Math.min(name.charCodeAt(i) - 65, 90 - name.charCodeAt(i) + 1);
  }
  return answer;
}

// solution("JEROEN");
// solution("JAN");

// solution("JEAAAAN");
// solution("JEAAANEA");

solution("JEZZEZAAAJEAAAAAAZS");
