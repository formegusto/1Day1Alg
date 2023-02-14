function solution(people, limit) {
  people = people.sort((a, b) => a - b);

  let minLeft = 0;
  let maxRight = people.length - 1;

  let count = 0;
  while (minLeft <= maxRight) {
    count++;
    // 일단 큰 놈 부터 태우고
    let weight = people[maxRight--];
    if (limit < weight + people[minLeft]) continue;

    // 그 다음 작은놈
    weight += people[minLeft++];
    if (limit < weight) minLeft--;
  }

  return count;
}

/*
이것도 for문 좀 개쩌는 거 있음
*/
