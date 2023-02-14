function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      let item = ((arr1[i] | arr2[i]) >> (n - j)) & 1;
      row += item === 1 ? "#" : " ";
    }
    answer.push(row);
  }

  return answer;
}

/*
또,, 화살표 함수가,,
*/
