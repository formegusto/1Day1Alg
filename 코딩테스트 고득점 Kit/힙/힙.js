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
      this.parent(idx) > this.items[idx]
    ) {
      this.swap(idx, this.parentIdx(idx));
      idx = this.parentIdx(idx);
    }
  }

  bubbleDown() {
    let idx = 0;
    while (
      (this.leftChild(idx) !== undefined &&
        this.leftChild(idx) < this.items[idx]) ||
      this.rightChild(idx) < this.items[idx]
    ) {
      let smallerIdx = this.leftChildIdx(idx);
      if (
        this.rightChild(idx) !== undefined &&
        this.rightChild(idx) < this.items[smallerIdx]
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

class MaxHeap extends MinHeap {
  bubbleUp() {
    let idx = this.items.length - 1;
    while (
      this.parent(idx) !== undefined &&
      this.parent(idx) < this.items[idx]
    ) {
      this.swap(idx, this.parentIdx(idx));
      idx = this.parentIdx(idx);
    }
  }

  bubbleDown() {
    let idx = 0;
    while (
      this.leftChild(idx) !== undefined &&
      (this.leftChild(idx) > this.items[idx] ||
        this.rightChild(idx) > this.items[idx])
    ) {
      let largerIdx = this.leftChildIdx(idx);
      if (
        this.rightChild(idx) !== undefined &&
        this.rightChild(idx) > this.items[largerIdx]
      ) {
        largerIdx = this.rightChildIdx(idx);
      }
      this.swap(largerIdx, idx);
      idx = largerIdx;
    }
  }
}

const minHeap = new MinHeap();
minHeap.add(1);
minHeap.add(10);
minHeap.add(5);
minHeap.add(100);
minHeap.add(8);

console.log("Init", minHeap.items);
console.log(minHeap.poll(), minHeap.items);
console.log(minHeap.poll(), minHeap.items);
console.log(minHeap.poll(), minHeap.items);
console.log(minHeap.poll(), minHeap.items, "\n");

const maxHeap = new MaxHeap();
maxHeap.add(1);
maxHeap.add(10);
maxHeap.add(5);
maxHeap.add(100);
maxHeap.add(8);

console.log("Init", maxHeap.items);
console.log(maxHeap.poll(), maxHeap.items);
console.log(maxHeap.poll(), maxHeap.items);
console.log(maxHeap.poll(), maxHeap.items);
console.log(maxHeap.poll(), maxHeap.items);
