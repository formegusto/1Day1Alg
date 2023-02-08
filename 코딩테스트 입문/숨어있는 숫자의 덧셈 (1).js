function solution(my_string) {
  const matches = my_string.match(/[0-9]/g);
  return matches ? matches.reduce((acc, cur) => acc + Number(cur), 0) : 0;
}
