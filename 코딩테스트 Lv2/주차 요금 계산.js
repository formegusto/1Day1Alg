function toMinute(time) {
  const [h, m] = time.split(":");

  return +h * 60 + +m;
}

function solution(fees, records) {
  const timeRecord = {};
  const parkingLot = {};
  for (let i = 0; i < records.length; i++) {
    const [t, car, type] = records[i].split(" ");

    if (type === "IN") {
      if (!parkingLot[car]) parkingLot[car] = t;
      else throw new Error("이미 주차되어 있는 차 입니다.");
    } else {
      if (!parkingLot[car]) throw new Error("주차되어 있지 않은 차 입니다.");
      else {
        const err = toMinute(t) - toMinute(parkingLot[car]);
        if (timeRecord[car]) timeRecord[car] += err;
        else timeRecord[car] = err;
        delete parkingLot[car];
      }
    }
  }
  Object.keys(parkingLot).forEach((car) => {
    const err = toMinute("23:59") - toMinute(parkingLot[car]);
    if (timeRecord[car]) timeRecord[car] += err;
    else timeRecord[car] = err;
    delete parkingLot[car];
  });

  // 정산
  const answer = [];
  const [bt, bf, ut, uf] = fees;
  const cars = Object.keys(timeRecord).sort();
  for (let i = 0; i < cars.length; i++) {
    const parkingTime = timeRecord[cars[i]];
    let price = 0;

    if (parkingTime) {
      if (parkingTime > bt) {
        let utCalc = (parkingTime - bt) / ut;

        if (!Number.isInteger(utCalc)) utCalc = Math.ceil(utCalc);
        price = bf + utCalc * uf;
      } else {
        price = bf;
      }
    }
    answer.push(price);
  }

  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);

console.log(
  solution(
    [120, 0, 60, 591],
    [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN",
    ]
  )
);
