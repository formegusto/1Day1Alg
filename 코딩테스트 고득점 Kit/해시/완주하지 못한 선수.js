function solution1(participant, completion) {
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

function solution2(participant, completion) {
  let answer = "";

  const completionMemory = {};

  for (let i = 0; i < completion.length; i++) {
    if (completionMemory[completion[i]]) {
      completionMemory[completion[i]]++;
    } else {
      completionMemory[completion[i]] = 1;
    }
  }

  for (let i = 0; i < participant.length; i++) {
    if (completionMemory[participant[i]]) {
      completionMemory[participant[i]]--;
    } else {
      answer = participant[i];
      break;
    }
  }

  return answer;
}

function solution3(participant, completion) {
  let answer = "";

  const completionMemory = {};

  let i = 0;
  while (i < completion.length) {
    if (completionMemory[completion[i]]) {
      completionMemory[completion[i++]]++;
    } else {
      completionMemory[completion[i++]] = 1;
    }
  }

  i = 0;
  while (true) {
    if (completionMemory[participant[i]]) {
      completionMemory[participant[i++]]--;
    } else {
      answer = participant[i];
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

console.time("solution 1");
solution1(input1.participant, input1.completion);
solution1(input2.participant, input2.completion);
solution1(input3.participant, input3.completion);
console.timeEnd("solution 1");

console.time("solution 2");
solution2(input1.participant, input1.completion);
solution2(input2.participant, input2.completion);
solution2(input3.participant, input3.completion);
console.timeEnd("solution 2");

console.time("solution 3");
solution3(input1.participant, input1.completion);
solution3(input2.participant, input2.completion);
solution3(input3.participant, input3.completion);
console.timeEnd("solution 3");
