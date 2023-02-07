class Heap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(aIdx, bIdx) {
    [this.heap[aIdx], this.heap[bIdx]] = [this.heap[bIdx], this.heap[aIdx]];
  }

  heappify(...v) {
    for (let i = 0; i < v.length; i++) this.heappush(v[i]);
  }

  // bubble up
  heappush(v) {
    this.heap.push(v);
    let curIdx = this.size() - 1;
    let parentIdx = ((curIdx - 1) / 2) >> 0;

    while (curIdx > 0 && this.heap[curIdx][1] < this.heap[parentIdx][1]) {
      this.swap(curIdx, parentIdx);
      curIdx = parentIdx;
      parentIdx = ((curIdx - 1) / 2) >> 0;
    }
  }

  // bubble down
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
        this.heap[nextIdx][1] > this.heap[rightChildIdx][1]
      )
        nextIdx = rightChildIdx;

      if (this.heap[curIdx][1] > this.heap[nextIdx][1]) {
        this.swap(curIdx, nextIdx);
        curIdx = nextIdx;
      } else break;
    } while (true);

    return min;
  }
}

// [작업이 요청되는 시점, 작업의 소요시간]
/**
 *
 * @param {array} jobs
 */
function solution(jobs) {
  const _ = new Heap();
  const size = jobs.length;
  jobs.sort((a, b) => a[0] - b[0]);

  let time = 0;
  let complete = 0;
  let totalTime = 0;

  while (jobs.length || _.size()) {
    while (jobs.length && jobs[0][0] === time) _.heappush(jobs.shift());
    if (_.size() && time >= complete) {
      const exec = _.heappop();
      complete = time + exec[1];
      totalTime += complete - exec[0];
    }
    time++;
  }

  return (totalTime / size) >> 0;
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);
