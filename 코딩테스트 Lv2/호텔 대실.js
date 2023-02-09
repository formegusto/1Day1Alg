function timeToIdx(time) {
  const [hour, minute] = time.split(":");

  return Number(hour) * 60 + Number(minute);
}

function solution(book_time) {
  // 누적합
  const rooms = Array.from(
    {
      length: 24 * 60 + 10,
    },
    () => 0
  );

  for (let i = 0; i < book_time.length; i++) {
    let [startTime, endTime] = book_time[i];
    startTime = timeToIdx(startTime);
    endTime = timeToIdx(endTime);

    for (let time = startTime; time <= endTime + 10 - 1; time++) rooms[time]++;
  }

  return Math.max.apply(null, rooms);
}

solution([
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
]);

solution([
  ["09:10", "10:10"],
  ["10:20", "12:20"],
]);

solution([
  ["10:20", "12:30"],
  ["10:20", "12:30"],
  ["10:20", "12:30"],
]);
