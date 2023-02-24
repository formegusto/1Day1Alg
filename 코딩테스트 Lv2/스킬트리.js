function solution(skill, skillTrees) {
  let answer = 0;

  const preSkillSet = [...skill].reduce((acc, cur, idx) => {
    if (idx) acc[cur] = skill[idx - 1];
    else acc[cur] = "";
    return acc;
  }, {});

  console.log(preSkillSet);

  for (let i = 0; i < skillTrees.length; i++) {
    const skillTree = skillTrees[i];
    const skillSet = { "": true };

    for (let j = 0; j < skillTree.length; j++) {
      // 현재 조회중인 것이 선행 스킬이 필요한 스킬일 경우
      if (preSkillSet[skillTree[j]]) {
        if (skillSet[preSkillSet[skillTree[j]]]) skillSet[skillTree[j]] = true;
        else break;
      } else {
        skillSet[skillTree[j]] = true;
      }
    }

    if (Object.keys(skillSet).length - 1 === skillTree.length) answer++;
  }

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
