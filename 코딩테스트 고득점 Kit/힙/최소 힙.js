// https://nyang-in.tistory.com/153
class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(aIdx, bIdx) {
    [this.heap[aIdx], this.heap[bIdx]] = [this.heap[bIdx], this.heap[aIdx]];
  }

  size() {
    return this.heap.length;
  }

  heappify(...arr) {
    for (let i = 0; i < arr.length; i++) this.heappush(arr[i]);

    return this.heap;
  }

  heappush(v) {
    this.heap.push(v);
    let curIdx = this.heap.length - 1;
    let parentIdx = ((curIdx - 1) / 2) >> 0;

    while (curIdx > 0 && this.heap[parentIdx] > this.heap[curIdx]) {
      this.swap(curIdx, parentIdx);
      curIdx = parentIdx;
      parentIdx = ((curIdx - 1) / 2) >> 0;
    }

    return this.heap;
  }

  heappop() {
    const min = this.heap[0];
    if (this.heap.length <= 1) {
      this.heap = [];
      return min;
    }
    const max = this.heap.pop();

    let curIdx = 0;
    this.heap[curIdx] = max;

    do {
      // 1. 힙은 순차적으로 쌓이기 때문에, leftChildIdx가 없으면 갈 곳이 이제 없는 것.
      let leftChildIdx = curIdx * 2 + 1;
      if (this.heap[leftChildIdx] === undefined) break;
      let nextIdx = leftChildIdx;

      // 2. rightChildIdx가 추가적으로 존재할 수 있다.
      // 존재하는지 확인하고, 있다면 leftChildIdx와 비교하여 더욱 가까운 곳으로 노드를 이동.
      let rightChildIdx = curIdx * 2 + 2;
      if (
        this.heap[rightChildIdx] !== undefined &&
        this.heap[leftChildIdx] > this.heap[rightChildIdx]
      )
        nextIdx = rightChildIdx;

      // 3. 최종판정, 갈 곳 정하기
      if (this.heap[nextIdx] < this.heap[curIdx]) {
        this.swap(curIdx, nextIdx);
        curIdx = nextIdx;
        leftChildIdx = curIdx * 2 + 1;
        rightChildIdx = curIdx * 2 + 2;
      } else break;
    } while (true);

    return min;
  }
}

let minHeap = new MinHeap();
console.log(minHeap.heappush(4));
console.log(minHeap.heappush(3));
console.log(minHeap.heappush(2));
console.log(minHeap.heappush(5));
console.log(minHeap.heappush(6));
console.log(minHeap.heappush(7));
console.log(minHeap.heappush(1));

console.log(minHeap.heappop());
console.log(minHeap.heappop());
console.log(minHeap.heappop());
console.log(minHeap.heappop());
console.log(minHeap.heappop());
console.log(minHeap.heappop());
console.log(minHeap.heappop());
console.log(minHeap.heappop());

let minHeap2 = new MinHeap();
console.log(minHeap2.heappify(4, 3, 2, 5, 6, 7, 1));
