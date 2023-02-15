// https://gmlwjd9405.github.io/2018/08/31/algorithm-union-find.html
// 1. Disjoint Set
/*
서로 중복되지 않는 부분 집합들로 나눠진 원소들에 대한 정보를 저장하고, 조작하는 자료구조
i.e. 서로소 집합 자료구조
*/

// 2. Union-Find
/*
Disjoint Set을 표현할 때 사용하는 알고리즘
트리 구조를 이용하여 구현한다.
*/

// 3. Union-Find의 연산
/*
1. make-set(x)
    - 초기화
    - x를 유일한 원소로 하는 새로운 집합을 만든다.
2. union(x, y)
    - 합하기
    - x가 속한 집합과 y가 속한 집합을 합친다.
3. find(x)
    - 찾기
    - x가 속한 집합의 대표값(루트 노드 값)을 반환한다.
*/

/*
Union-Find 기본적인 구현 방법
*/
function unionFind1() {
  const MAX_SIZE = 8;

  /* 초기화 */
  let root = Array.from(
    {
      length: MAX_SIZE,
    },
    (_, idx) => idx
  );

  /* find(x) 재귀 이용 */
  // 계속해서 올라가는 구조
  function find(x) {
    if (root[x] === x) return x;
    else return find(root[x]);
  }

  function union(x, y) {
    x = find(x);
    y = find(y);

    root[y] = x;
  }

  union(0, 1);
  union(3, 4);
  union(5, 0);
  union(2, 6);
  union(6, 7);
  union(1, 4);

  console.log(root);
  // [5, 0, 2, 5, 3, 5, 2, 2];
  /*
  해당의 구조에서 루트노드는 idx(2)와 idx(5)
  idx(2)의 멤버로는 idx(6), idx(7)
  idx(5)의 멤버로는 idx(3) - idx(4), idx(0) - idx(1)
  */
}

unionFind1();

/*
find 연산 최적화
*/
function unionFind2() {
  const MAX_SIZE = 8;

  /* 초기화 */
  let root = Array.from(
    {
      length: MAX_SIZE,
    },
    (_, idx) => idx
  );

  /* find(x) 재귀 이용 */
  // 경로 압축 (Path Compression)
  function find(x) {
    if (root[x] === x) return x;
    else return (root[x] = find(root[x]));
  }

  function union(x, y) {
    x = find(x);
    y = find(y);

    root[y] = x;
  }

  union(0, 1);
  union(3, 4);
  union(5, 0);
  union(2, 6);
  union(6, 7);
  union(1, 4);

  console.log(root);
  // [5, 5, 2, 5, 3, 5, 2, 2];
  /*
  해당의 구조에서 루트노드는 idx(2)와 idx(5)
  idx(2)의 멤버로는 idx(6), idx(7)
  idx(5)의 멤버로는 idx(3) - idx(4), idx(0), idx(1)
  // 트리구조가 완전 비대칭인 1자로 연결된 상황에서의 시간복잡도는 O(N) 이기 때문에 이를 보완
  */
}

unionFind2();

/*
union 연산 최적화 (union-by-rank, union-by-height)
항상 높이가 더 낮은 트리를 높은 트리 밑에 넣는다.
*/
function unionFind3() {
  const MAX_SIZE = 8;

  /* 초기화 */
  let root = Array.from(
    {
      length: MAX_SIZE,
    },
    (_, idx) => idx
  );
  let rank = Array.from(
    {
      length: MAX_SIZE,
    },
    () => 0
  );

  /* find(x) 재귀 이용 */
  // 경로 압축 (Path Compression)
  function find(x) {
    if (root[x] === x) return x;
    else return (root[x] = find(root[x]));
  }

  function union(x, y) {
    x = find(x);
    y = find(y);

    if (x === y) return;

    // union-by-rank 최적화
    if (rank[x] < rank[y]) root[x] = y;
    else root[y] = x;

    if (rank[x] === rank[y]) rank[x]++;
  }

  union(0, 1);
  union(3, 4);
  union(5, 0);
  union(2, 6);
  union(6, 7);
  union(1, 4);

  console.log(root);
  console.log(rank);
  // [0, 0, 2, 0, 3, 0, 2, 2];
  /*
  해당의 구조에서 루트노드는 idx(0)와 idx(5)
  idx(0)의 멤버로는 idx(1), idx(3) - idx(4), idx(5)
  idx(2)의 멤버로는 idx(6), idx(7)
  // 트리구조가 완전 비대칭인 1자로 연결된 상황에서의 시간복잡도는 O(N) 이기 때문에 이를 보완
  */
}

unionFind3();
