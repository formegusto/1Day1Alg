let answer = [0, 0];

function compress(arr, size) {
  const set = new Set(arr);
  if (set.size === 1) {
    answer[arr[0]]++;
    return;
  }
  if (size === 1) return;

  let nSize = size / 2;
  for (let seq = 0; seq < 4; seq++) {
    let nArr = [];
    let init = seq < 2 ? nSize * seq : size * nSize + nSize * (seq - 2);
    for (let i = 0; i < nSize; i++) {
      for (let j = init; j < init + nSize; j++) {
        nArr.push(arr[j]);
      }
      init += size;
    }
    compress(nArr, nSize);
  }
}

function solution(arr) {
  const size = arr.length;
  arr = arr.flat();
  compress(arr, size);

  return answer;
}
