function solution(bl, bw, tws) {
  let answer = 0;

  let w = 0,
    l = 0;
  const bridge = [];
  for (let i = 0; i < bl; i++) bridge[i] = 0;

  while (true) {
    console.log(answer, bridge);
    if (!tws.length && !l && !w) break;
    answer++;
    let truck = bridge.shift();
    if (truck) {
      w -= truck;
      l--;
    }
    if (w + tws[0] <= bw && l < bl) {
      w += tws[0];
      l++;
      bridge.push(tws.shift());
    } else {
      bridge.push(0);
    }
  }

  return answer;
}

function solution3(bl, bw, tws) {
  let answer = 0;
  let w = 0;
  const q = [[0, 0]];

  while (q.length > 0 || tws.length) {
    if (q[0][1] === answer) w -= q.shift()[0];

    if (w + tws[0] <= bw) {
      w += tws[0];
      q.push([tws.shift(), answer + bl]);
    } else {
      if (q[0]) answer = q[0][1] - 1;
    }

    answer++;
  }

  return answer;
}

function solution2(bridge_length, weight, truck_weights) {
  // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
  let time = 0,
    qu = [[0, 0]],
    weightOnBridge = 0;

  // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
  while (qu.length > 0 || truck_weights.length > 0) {
    console.log(time, qu);
    // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
    //    다리 위 트럭 무게 합에서 빼준다.
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면
      //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
      //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
      //    참고: if 밖에서 1 더하기 때문에 -1 해줌
      if (qu[0]) time = qu[0][1] - 1;
    }
    // 시간 업데이트 해준다.
    time++;
  }
  return time;
}

console.log(solution3(2, 10, [7, 4, 5, 6]));
// console.log(solution(100, 100, [10]));

// console.log(solution2(2, 10, [7, 4, 5, 6]));
// console.log(solution2(100, 100, [10]));
