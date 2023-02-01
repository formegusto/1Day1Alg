function solution(participant, completion) {
  const completionMemory = {};

  completion.forEach((compKey) => {
    if (completionMemory[compKey]) {
      completionMemory[compKey]++;
    } else {
      completionMemory[compKey] = 1;
    }
  });

  let answer;
  for (let part of participant) {
    if (completionMemory[part]) {
      completionMemory[part]--;
    } else {
      answer = part;
      break;
    }
  }

  return answer;
}

const input1 = {
  participant: ["leo", "kiki", "eden"],
  completion: ["eden", "kiki"],
}; // "leo"
const input2 = {
  participant: ["marina", "josipa", "nikola", "vinko", "filipa"],
  completion: ["josipa", "filipa", "marina", "nikola"],
}; // "vinko"
const input3 = {
  participant: ["mislav", "stanko", "mislav", "ana"],
  completion: ["stanko", "ana", "mislav"],
}; // "mislav"

console.log(solution(input1.participant, input1.completion));
console.log(solution(input2.participant, input2.completion));
console.log(solution(input3.participant, input3.completion));
