/*
https://gurtn.tistory.com/94
이진 탐색 알고리즘(Binary Search Algorithm)은 
이미 정렬되어 있는 배열에서 탐색 범위를 두 부분 리스트로 나눠 
절반씩 좁혀가 필요한 부분에서만 탐색하도록 제한하여 원하는 값을 찾는 알고리즘이다.
*/
/*
이진 탐색은 정렬되어 있는 배열이 필요로 하며 각 left, right, mid의 변수를 가진다.
left : 왼쪽 끝 인덱스
right : 오른쪽 끝 인덱스
left와 right의 사이는 탐색범위가 된다.

mid : left와 right범위의 중간점, 범위에서의 중간을 위치한다.
중간점은 (left + right) / 2 란 공식으로 구할 수 있다.
*/

function BinarySearch(list, target, left, right) {
  let mid = 0;

  while (left <= right) {
    // 중간값을 찾는 것을 목표로 하며,
    mid = Math.floor((left + right) / 2);

    if (list[mid] === target) return mid;

    // 점점 좁혀져 간다.
    if (list[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
}

const sample = Array.from({ length: 10 }, (_, i) => i + 1);

console.log(BinarySearch(sample, 7, 0, sample.length - 1));
