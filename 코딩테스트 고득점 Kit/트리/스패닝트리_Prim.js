class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(aIdx, bIdx) {
    [this.heap[aIdx], this.heap[bIdx]] = [this.heap[bIdx], this.heap[aIdx]];
  }

  get size() {
    return this.heap.length;
  }

  heappush(v) {
    this.heap.push(v);
    let curIdx = this.heap.length - 1;
    let parIdx = ((curIdx - 1) / 2) >> 0;

    while (curIdx > 0 && this.heap[parIdx][2] > this.heap[curIdx][2]) {
      this.swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = ((curIdx - 1) / 2) >> 0;
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
      let leftChildIdx = curIdx * 2 + 1;

      if (!this.heap[leftChildIdx]) break;
      let nextIdx = leftChildIdx;

      let rightChildIdx = curIdx * 2 + 2;
      if (
        this.heap[rightChildIdx] &&
        this.heap[leftChildIdx][2] > this.heap[rightChildIdx][2]
      )
        nextIdx = rightChildIdx;

      if (this.heap[nextIdx][2] < this.heap[curIdx][2]) {
        this.swap(curIdx, nextIdx);
        curIdx = nextIdx;
      } else break;
    } while (true);

    return min;
  }
}

/*
1. 시작 정점을 spanning tree 집합에 넣어준다.
2. spanning tree 집합에 인접한 정점들 중에서 최소 간선으로 연결될 수 있는 정점을
   spanning tree 집합에 넣어주고, 이 때의 간선은 spanning tree의 간선이 된다.
3. 이 과정을 간선이 n-1개가 되도록 반복한다.
*/
function tree(n, m, v) {
  let answer = 0;
  const visited = Array(n + 1).fill(false);
  const graph = Array.from(
    {
      length: n + 1,
    },
    () => []
  );
  for (let i = 0; i < m; i++) {
    const [start, end, dis] = v[i];
    graph[start].push([end, dis]);
    graph[end].push([start, dis]);
  }
  visited[1] = true;
  const heap = new MinHeap();
  for (let i = 0; i < graph[1].length; i++) heap.heappush([1, ...graph[1][i]]);

  for (let i = 0; i < n - 1; i++) {
    let e;
    while (heap.size) {
      e = heap.heappop();

      if (!visited[e[1]]) break;
    }

    visited[e[1]] = true;
    answer += e[2];
    for (let j = 0; j < graph[e[1]].length; j++)
      heap.heappush([e[1], ...graph[e[1]][j]]);
  }

  console.log(answer);
}

tree(6, 9, [
  [1, 2, 5],
  [1, 3, 4],
  [2, 3, 2],
  [2, 4, 7],
  [3, 4, 6],
  [3, 5, 11],
  [4, 5, 3],
  [4, 6, 8],
  [5, 6, 8],
]);
