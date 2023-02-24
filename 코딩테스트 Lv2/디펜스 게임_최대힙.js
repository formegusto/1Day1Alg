class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(aIdx, bIdx) {
    [this.heap[aIdx], this.heap[bIdx]] = [this.heap[bIdx], this.heap[aIdx]];
  }

  size() {
    return this.heap.length;
  }

  heappush(v) {
    this.heap.push(v);

    let curIdx = this.heap.length - 1;
    let parentIdx = ((curIdx - 1) / 2) >> 0;

    while (curIdx > 0 && this.heap[parentIdx] < this.heap[curIdx]) {
      this.swap(curIdx, parentIdx);
      curIdx = parentIdx;
      parentIdx = ((curIdx - 1) / 2) >> 0;
    }

    return this.heap;
  }

  heappop() {
    const max = this.heap[0];
    if (this.heap.length <= 1) {
      this.heap = [];
      return max;
    }
    const min = this.heap.pop();
    let curIdx = 0;
    this.heap[curIdx] = min;
    do {
      let leftChildIdx = curIdx * 2 + 1;
      if (!this.heap[leftChildIdx]) break;
      let nextIdx = leftChildIdx;

      let rightChildIdx = curIdx * 2 + 2;
      if (
        this.heap[rightChildIdx] &&
        this.heap[leftChildIdx] < this.heap[rightChildIdx]
      )
        nextIdx = rightChildIdx;

      if (this.heap[nextIdx] > this.heap[curIdx]) {
        this.swap(curIdx, nextIdx);
        curIdx = nextIdx;
      } else break;
    } while (true);

    return max;
  }
}

function solution(n, k, enemy) {
  let answer = 0;

  let acc = 0;
  const maxHeap = new MaxHeap();
  for (let i = 0; i < enemy.length; i++) {
    maxHeap.heappush(enemy[i]);
    acc += enemy[i];

    if (acc > n) {
      if (k) {
        acc -= maxHeap.heappop();
        k--;
      } else break;
    }
    answer++;
  }

  return answer;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
