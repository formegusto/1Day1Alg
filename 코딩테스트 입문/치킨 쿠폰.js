function solution(chicken) {
  let answer = 0;
  // chicken => 초기 쿠폰갯수
  // 쿠폰으로 주문한 상태
  do {
    let newChicken = Math.floor(chicken / 10);
    answer += newChicken;
    if (newChicken < 1) break;
    let restCoupon = chicken % 10;
    chicken = newChicken + restCoupon;
  } while (true);

  return answer;
}
