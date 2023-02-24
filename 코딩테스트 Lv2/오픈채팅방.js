const DICT = {
  Enter: "님이 들어왔습니다.",
  Leave: "님이 나갔습니다.",
};

function solution(record) {
  const names = {};
  const answer = [];
  for (let i = 0; i < record.length; i++) {
    const [type, uid, name] = record[i].split(" ");

    if (type === "Enter" || type === "Change") names[uid] = name;
    if (type !== "Change") answer.push([uid, type]);
  }

  return answer.map(([uid, type]) => `${names[uid]}${DICT[type]}`);
}

solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);
