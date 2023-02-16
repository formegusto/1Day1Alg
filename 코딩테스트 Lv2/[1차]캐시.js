function solution(cacheSize, cities) {
  let answer = 0;

  cities = cities.map((v) => v.toLowerCase());
  let queue = [];

  for (let i = 0; i < cities.length; i++) {
    const findIdx = queue.indexOf(cities[i]);

    if (findIdx === -1) {
      answer += 5;
    } else {
      answer += 1;
      queue = [...queue.slice(0, findIdx), ...queue.slice(findIdx + 1)];
    }

    if (queue.length < cacheSize) queue.push(cities[i]);
  }

  return answer;
}
