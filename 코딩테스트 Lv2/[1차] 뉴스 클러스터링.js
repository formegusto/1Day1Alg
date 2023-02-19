function getSet(str) {
  const set = [];
  for (let i = 0; i < str.length - 1; i++) {
    let inData = (str[i] + str[i + 1]).match(/[A-Z]/g);
    if (!inData || inData.length !== 2) continue;
    set.push(inData.join(""));
  }

  return set;
}

function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  if (str1 === str2) return 65536;

  const set1 = getSet(str1).sort();
  const set2 = getSet(str2).sort();

  let intersect = [];
  let union = [];

  while (set1.length || set2.length) {
    if (set1[0] === set2[0]) {
      intersect.push(set1.shift());
      union.push(set2.shift());
    } else {
      if (set1.length && set2.length) {
        if (set1[0] > set2[0]) {
          union.push(set2.shift());
        } else {
          union.push(set1.shift());
        }
      } else {
        if (set1.length) {
          union.push(set1.shift());
        } else {
          union.push(set2.shift());
        }
      }
    }
  }

  return Math.floor((intersect.length / union.length) * 65536);
}
