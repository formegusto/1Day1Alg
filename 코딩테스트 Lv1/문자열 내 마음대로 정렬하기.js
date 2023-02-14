function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] > b[n] ? 1 : a[n] === b[n] ? (a > b ? 1 : -1) : -1
  );
}

/*
localeCompare 뭐하는 놈이냐?
*/
