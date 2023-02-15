function solution(arr) {
  arr.sort((a, b) => b - a);

  let v = arr[0];
  while (true) {
    for (let i = 0; i < arr.length; i++) {
      if (v % arr[i]) break;
      if (i === arr.length - 1) return v;
    }

    v += arr[0];
  }
}

// https://terms.naver.com/entry.naver?docId=3338368&cid=47324&categoryId=47324
