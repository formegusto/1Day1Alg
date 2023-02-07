class Heap {
  // type : min or max
  constructor(type) {
    this.heap = [];
    this.compare = (aIdx, bIdx) => {
      // minHeap은 변화를 줄 때에 작은값을 옮겨야 하고
      if (!type || type === "min") return this.heap[aIdx] < this.heap[bIdx];
      // maxHeap은 변화를 줄 때에 큰 값을 옮기는 특징을 가진다.
      else return this.heap[aIdx] > this.heap[bIdx];
    };
  }

  get() {
    return this.size() ? this.heap[0] : 0;
  }

  size() {
    return this.heap.length;
  }

  swap(aIdx, bIdx) {
    [this.heap[aIdx], this.heap[bIdx]] = [this.heap[bIdx], this.heap[aIdx]];
  }

  heappify(...v) {
    this.heap = [];
    for (let i = 0; i < v.length; i++) this.heappush(v[i]);
  }

  heappush(v) {
    this.heap.push(v);
    let curIdx = this.heap.length - 1;
    let parIdx = ((curIdx - 1) / 2) >> 0;

    while (curIdx > 0 && this.compare(curIdx, parIdx)) {
      this.swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = ((curIdx - 1) / 2) >> 0;
    }
  }

  heappop() {
    if (this.size() <= 1) {
      this.heap = [];
      return;
    }

    let curIdx = 0;
    this.heap[curIdx] = this.heap.pop();

    do {
      let leftChildIdx = curIdx * 2 + 1;
      if (!this.heap[leftChildIdx]) break;
      let nextIdx = leftChildIdx;

      let rightChildIdx = curIdx * 2 + 2;
      if (this.heap[rightChildIdx] && this.compare(rightChildIdx, nextIdx))
        nextIdx = rightChildIdx;

      if (this.compare(nextIdx, curIdx)) {
        this.swap(curIdx, nextIdx);
        curIdx = nextIdx;
      } else break;
    } while (true);
  }
}

/**
 *
 * @param {array} operations
 * @returns array
 */
function solution(operations) {
  const minHeap = new Heap("min");
  const maxHeap = new Heap("max");

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "D 1":
        maxHeap.heappop();
        minHeap.heappify(...maxHeap.heap);
        break;
      case "D -1":
        minHeap.heappop();
        maxHeap.heappify(...minHeap.heap);
        break;
      default:
        const num = Number(operations[i].split(" ")[1]);

        minHeap.heappush(num);
        maxHeap.heappush(num);
    }
  }

  return [maxHeap.get(), minHeap.get()];
}

console.log(
  solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])
);
