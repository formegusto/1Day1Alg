function solution(routes) {
  let answer = 0;

  routes.sort((a, b) => a[1] - b[1]);
  let pos = -30001;
  for (let i = 0; i < routes.length; i++) {
    if (pos < routes[i][0]) {
      pos = routes[i][1];
      answer++;
    }
  }

  return answer;
}
