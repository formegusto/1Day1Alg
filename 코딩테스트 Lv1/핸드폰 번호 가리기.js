function solution(phone_number) {
  return (
    phone_number.slice(0, -4).replace(/[0-9]/g, "*") + phone_number.slice(-4)
  );
}

// 정규식 진짜 중요하구나
