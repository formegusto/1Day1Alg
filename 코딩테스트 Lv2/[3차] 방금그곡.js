function getMinute(time) {
  const [hh, mm] = time.split(":");
  return +hh * 60 + +mm;
}

function sharpMapping(str) {
  const sharps = ["C#", "D#", "E#", "F#", "G#", "A#", "B#"];
  for (let i = 0; i < sharps.length; i++) {
    str = str.replace(
      new RegExp(`${sharps[i]}`, "g"),
      sharps[i][0].toLowerCase()
    );
  }

  return str;
}

function solution(m, musicinfos) {
  let answer = "(None)";
  let maxTime = Number.MIN_SAFE_INTEGER;
  m = sharpMapping(m);
  for (let i = 0; i < musicinfos.length; i++) {
    let [startTime, endTime, title, mInfo] = musicinfos[i].split(",");
    // 여기서 바꿔줘야함
    // #도 하나의 음계로 표현되어져야 하기 때문임
    // 1분당 C -> # 이 아니고,
    // 1분당 C# 이렇게 한꺼번에 이동해야함
    mInfo = sharpMapping(mInfo);
    const err = getMinute(endTime) - getMinute(startTime);
    let errCode = "";
    for (let i = 0; i < err; i++) errCode += mInfo[i % mInfo.length];
    // 여기가 아니고,
    // errCode = sharpMapping(errCode);

    if (errCode.includes(m) && maxTime < err) {
      answer = title;
      maxTime = err;
    }
  }

  return answer;
}

solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]);
solution("CC#BCC#BCC#BCC#B", [
  "03:00,03:30,FOO,CC#B",
  "04:00,04:08,BAR,CC#BCC#BCC#B",
]);
console.log(solution("ABC", ["12:00,12:06,HELLO,ABC#ABC#ABC"]));
console.log(solution("ABC", ["12:00,12:10,HELLO,ABC#ABC#ABC"]));

//  "(None)"
// "ABC" ["12:00,12:10,HELLO,ABC#ABC#ABC"] "HELLO"
// "ABC" ["12:04,13:00,HELLO,ABC#ABC#ABC"] "HELLO"
// "C#C" ["12:00,12:06,HELLO,C#C#CC#"] "HELLO"
