function decode(quinary) {
  let result = 0;
  const length = quinary.length;
  const dec = [0, 1, 2, 2, 3];
  for (let i = 0; i < quinary.length; i++) {
    let x = quinary[i];
    let exp = length - i - 1;
    result += 4 ** exp * dec[x];
    if (x == 2) break;
  }

  return result;
}

function solution(n, l, r) {
  l = (l - 1).toString(5);
  r = r.toString(5);

  let c1 = decode(l);
  let c2 = decode(r);

  return c2 - c1;
}
