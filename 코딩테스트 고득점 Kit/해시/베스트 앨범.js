function solution(genres, plays) {
  /*
    [key:genre]
    plays: array<play and index>
    count: int(sum of plays)
    */
  const infos = {};
  for (let i = 0; i < genres.length; i++) {
    const info = infos[genres[i]];
    const play = plays[i];

    if (info) {
      infos[genres[i]] = {
        plays: info.plays.concat([[play, i]]),
        count: info.count + play,
      };
    } else {
      infos[genres[i]] = {
        plays: [[play, i]],
        count: play,
      };
    }
  }

  const sortedKey = Object.keys(infos).sort((keyA, keyB) => {
    return infos[keyB].count - infos[keyA].count;
  });

  let answer = [];
  for (let genre of sortedKey) {
    const info = infos[genre];
    info.plays.sort(([playA, _A], [playB, _B]) => {
      return playB - playA;
    });

    index = info.plays.slice(0, 2).map(([_, i]) => i);
    answer = answer.concat(index);
  }

  return answer;
}

const input1 = {
  genres: ["classic", "pop", "classic", "classic", "pop"],
  plays: [500, 600, 150, 800, 2500],
};

console.log(solution(input1.genres, input1.plays));
