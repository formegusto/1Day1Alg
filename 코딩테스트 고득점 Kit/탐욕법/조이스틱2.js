function solution(name) {
  let joy = "A".repeat(name.length);

  let count = 0;
  let i = 0;
  let dir = "right";
  while (joy !== name) {
    if (name[i] === "A") {
      // 왼쪽이 좋은지 오른쪽이 좋은지 선택해야함
      let left = i;
      let right = i;
      let leftCount = 0;
      let rightCount = 0;

      while (joy[left] === name[left]) {
        leftCount++;
        left--;
        if (left === -1) left = name.length - 1;
      }
      while (joy[right] === name[right]) {
        rightCount++;
        right++;
        if (right === name.length) right = 0;
      }

      let nextDir = leftCount >= rightCount ? "right" : "left";
      let incCount = Math.min(rightCount, leftCount);
      count += dir !== nextDir ? incCount - 1 : incCount;
      console.log(count);
      i = leftCount >= rightCount ? right : left;
    }

    count += Math.min(name.charCodeAt(i) - 65, 90 - name.charCodeAt(i) + 1);
    joy = joy.substring(0, i) + name[i] + joy.substring(i + 1);
    console.log(count);

    if (joy === name) break;

    switch (dir) {
      case "right":
        i++;
        if (i === name.length) i = 0;
        break;
      case "left":
        i--;
        if (i === -1) i = name.length - 1;
        break;
    }

    count++;
  }

  return count;
}

console.log(solution("JEROEN"), "\n");
console.log(solution("JAN"), "\n");
console.log(solution("JEAAAAN"), "\n");
console.log(solution("JEAAANEA"), "\n");
console.log(solution("AAAAAJEJE"), "\n");
console.log(solution("AAAAAAAAA"), "\n");
console.log(solution("JEAAANEAAAAZ"), "\n");
