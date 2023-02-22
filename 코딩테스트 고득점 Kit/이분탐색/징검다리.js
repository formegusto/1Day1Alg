function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);

  let answer = 0;
  let left = 0;
  let right = distance;
  while (left <= right) {
    let removed = 0;
    const mid = Math.floor((left + right) / 2);
    console.log([left, mid, right]);
    let prev = 0;
    for (let i = 0; i < rocks.length; i++) {
      if (rocks[i] - prev < mid) removed++;
      else prev = rocks[i];
    }

    // if (distance - rocks[rocks.length - 1] < mid) removed++;

    console.log(prev);
    console.log("==> removed :", removed, "\n");
    if (removed > n) {
      right = mid - 1;
    } else {
      answer = mid;
      left = mid + 1;
    }
  }

  return answer;
}

solution(25, [2, 14, 11, 21, 17], 2);
