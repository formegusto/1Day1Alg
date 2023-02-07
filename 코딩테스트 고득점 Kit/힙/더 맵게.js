class Heap {
  constructor() {
    this.heap = [];
  }

  swap(aIdx, bIdx) {
    [this.heap[aIdx], this.heap[bIdx]] = [this.heap[bIdx], this.heap[aIdx]];
  }

  size() {
    return this.heap.length;
  }

  heappify(...v) {
    for (let i = 0; i < v.length; i++) this.heappush(v[i]);
  }

  heappush(v) {
    this.heap.push(v);
    let curIdx = this.heap.length - 1;
    let parIdx = ((curIdx - 1) / 2) >> 0;

    while (curIdx > 0 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = ((curIdx - 1) / 2) >> 0;
    }
  }

  heappop() {
    const min = this.heap[0];
    if (this.size() <= 1) {
      this.heap = [];
      return min;
    }

    let curIdx = 0;
    const max = this.heap.pop();
    this.heap[curIdx] = max;

    do {
      const leftChildIdx = curIdx * 2 + 1;
      if (this.heap[leftChildIdx] === undefined) break;
      let nextIdx = leftChildIdx;

      const rightChildIdx = curIdx * 2 + 2;
      if (
        this.heap[rightChildIdx] !== undefined &&
        this.heap[leftChildIdx] > this.heap[rightChildIdx]
      )
        nextIdx = rightChildIdx;

      if (this.heap[curIdx] > this.heap[nextIdx]) {
        this.swap(curIdx, nextIdx);
        curIdx = nextIdx;
      } else break;
    } while (true);
    return min;
  }
}

function solution(sco, k) {
  let ans = 0;
  const _ = new Heap();
  _.heappify.apply(_, sco);

  while (true) {
    const min1 = _.heappop();
    if (min1 >= k) break;
    else {
      if (_.heap.length < 1) return -1;
    }
    const min2 = _.heappop();
    const newSco = min1 + min2 * 2;
    _.heappush(newSco);
    ans += 1;
  }

  return ans;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
