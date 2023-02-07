function solution(s) {
  let arr = s.split(" ");
  let answer = Number(arr[0]);
  let prev = answer;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === "Z") answer -= prev;
    else {
      prev = Number(arr[i]);
      answer += prev;
    }
  }

  return answer;
}

// 스택처럼 해결한 사람꺼 있음!
// 난 큐처럼? 해결한듯
