function solution(array, n) {
  return array.reduce((acc, cur) => (cur === n ? acc + 1 : acc), 0);
}

console.log(solution([1, 1, 2, 3, 4, 5], 1));

/*
filter도 있음.
*/
