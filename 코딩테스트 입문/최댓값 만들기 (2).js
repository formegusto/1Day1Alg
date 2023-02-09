function solution(numbers) {
  let sorted = numbers.sort((a, b) => Math.abs(b) - Math.abs(a));

  let i = 0;
  let j = 1;
  let maxV = sorted[i];
  const memory = [];
  while (true) {
    let result = maxV * sorted[j];
    memory.push(result);
    if (Math.sign(maxV) === Math.sign(sorted[j])) return result;
    else {
      j++;
      if (sorted.length <= j) {
        maxV = sorted[++i];
        if (i >= sorted.length - 1) return Math.max.apply(null, memory);
        j = i + 1;
      }
    }
  }
}

/*
이 답 좀 소름;;

function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}

*/
