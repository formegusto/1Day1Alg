function solution(price) {
  let sale = 0;

  if (price >= 500000) sale = 0.2;
  else if (price >= 300000) sale = 0.1;
  else if (price >= 100000) sale = 0.05;

  return (price - price * sale) >> 0;
}
