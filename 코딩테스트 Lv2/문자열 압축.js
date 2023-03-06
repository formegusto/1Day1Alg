// https://ljhyunstory.tistory.com/18

function solution(s) {
  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < s.length + 1; i++) {
    let b = "";

    let cnt = 1;
    let tmp = s.slice(0, i);

    for (let j = i; j < s.length + i; j += i) {
      const slice = s.slice(j, j + i);
      if (tmp === slice) cnt++;
      else {
        if (cnt > 1) b = b + String(cnt) + tmp;
        else b = b + tmp;

        tmp = s.slice(j, j + i);
        cnt = 1;
      }
    }

    answer = Math.min(answer, b.length);
  }

  return answer;
}

solution("aabbaccc");
// solution("ababcdcdababcdcd");
