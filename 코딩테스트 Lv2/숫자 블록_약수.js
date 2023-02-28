function getDivisor(n) {
  const result = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      result.push(i);
      if (i !== n / i) result.push(n / i);
    }
  }

  return result;
}

// 100000014, 100000016;

for (let i = 100000014; i <= 100000016; i++) {
  console.log(i, getDivisor(i));
}
