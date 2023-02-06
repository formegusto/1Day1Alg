class Heap {
  constructor() {
    this.items = [];
  }

  swap(idx1, idx2) {
    let tmp = this.items[idx1];
    this.items[idx1] = this.items[idx2];
    this.items[idx2] = tmp;
  }

  // (N - 1) / 2
  parentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  // (N * 2) + 1
  leftChildIdx(idx) {
    return idx * 2 + 1;
  }

  // (N * 2) + 2
  rightChildIdx(idx) {
    return idx * 2 + 2;
  }

  parent(idx) {
    return this.items[this.parentIdx(idx)];
  }

  leftChild(idx) {
    return this.items[this.leftChildIdx(idx)];
  }

  rightChild(idx) {
    return this.items[this.rightChildIdx(idx)];
  }

  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  bubbleUp() {
    let idx = this.items.length - 1;
    while (
      this.parent(idx) !== undefined &&
      this.parent(idx)[1] > this.items[idx][1]
    ) {
      this.swap(idx, this.parentIdx(idx));
      idx = this.parentIdx(idx);
    }
  }

  bubbleDown() {
    let idx = 0;
    while (
      (this.leftChild(idx) !== undefined &&
        this.leftChild(idx)[1] < this.items[idx][1]) ||
      (this.rightChild(idx) !== undefined &&
        this.rightChild(idx)[1] < this.items[idx][1])
    ) {
      let smallerIdx = this.leftChildIdx(idx);
      if (
        this.rightChild(idx) !== undefined &&
        this.rightChild(idx)[1] < this.items[smallerIdx][1]
      )
        smallerIdx = this.rightChildIdx(idx);
      this.swap(idx, smallerIdx);
      idx = smallerIdx;
    }
  }

  add(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }

  poll() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();

    return item;
  }
}

function solution(jobs) {
  let size = jobs.length;
  let time = 0;
  let meanTime = 0;
  let waitings = new MinHeap();
  let execute = jobs.shift();

  let i = 0;
  while (true) {
    time += execute[1];
    meanTime += time - execute[0];

    for (; jobs[i] !== undefined && jobs[i][0] <= time; i++)
      waitings.add(jobs[i]);
    execute = waitings.poll();

    if (!execute) {
      break;
    }
  }

  return meanTime / size;
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);
