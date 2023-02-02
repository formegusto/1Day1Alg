function solution1(genres, plays) {
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

function solution2(genres, plays) {
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
  for (let i = 0; i < sortedKey.length; i++) {
    const info = infos[sortedKey[i]];
    info.plays.sort(([playA, _A], [playB, _B]) => {
      return playB - playA;
    });

    index = info.plays.slice(0, 2).map(([_, i]) => i);
    answer = answer.concat(index);
  }

  return answer;
}

function solution3(genres, plays) {
  const infos = {};
  let i = 0;
  while (i < genres.length) {
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

    i++;
  }

  const sortedKey = Object.keys(infos).sort((keyA, keyB) => {
    return infos[keyB].count - infos[keyA].count;
  });

  let answer = [];
  i = 0;
  while (i < sortedKey.length) {
    const info = infos[sortedKey[i++]];
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

console.time("Solution 1");
solution1(input1.genres, input1.plays);
console.timeEnd("Solution 1");

console.time("Solution 2");
solution2(input1.genres, input1.plays);
console.timeEnd("Solution 2");

console.time("Solution 3");
solution3(input1.genres, input1.plays);
console.timeEnd("Solution 3");
