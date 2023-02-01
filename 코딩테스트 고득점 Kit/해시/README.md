# Hash

[[프로그래머스 코딩테스트 연습] 해시 1](https://woopi1087.tistory.com/39)

해시(hash)란 데이터의 효율적 관리를 목적으로 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 자료구조이다.

- 키 (key) : 매핑 전 원래 데이터의 값
- 해시값 (hash value) : 매핑 후 데이터의 값

## 완주하지 못한 선수

```jsx
function solution(participant, completion) {
  const completionMemory = {};

  completion.forEach((compKey) => {
    if (completionMemory[compKey]) {
      completionMemory[compKey]++;
    } else {
      completionMemory[compKey] = 1;
    }
  });

  let answer;
  for (let part of participant) {
    if (completionMemory[part]) {
      completionMemory[part]--;
    } else {
      answer = part;
      break;
    }
  }

  return answer;
}
```

- 정확성 테스트
  Worst Case : (0.41ms, 33.7MB)
  Best Case : (0.08ms, 33.4MB)
- 효율성 테스트
  Worst Case : (63.62ms, 72.2MB)
  Best Case : (41.29ms, 56.8MB)

## 포켓몬

```jsx
function solution(nums) {
  const selectionMap = {};
  const size = nums.length;
  const maxSelectionSize = size / 2;

  let answer = 0;
  for (let i = 0; i < size; i++) {
    if (!selectionMap[nums[i]]) {
      selectionMap[nums[i]] = true;
      answer++;
    } else {
      continue;
    }

    if (answer >= maxSelectionSize) {
      break;
    }
  }

  return answer;
}

const input1 = [3, 1, 2, 3]; // result : 2
const input2 = [3, 3, 3, 2, 2, 4]; // result : 3
const input3 = [3, 3, 3, 2, 2, 2]; // result : 2

console.log(solution(input1));
console.log(solution(input2));
console.log(solution(input3));
```

- 정확성 테스트
  Worst Case : (1.92ms, 34.2MB)
  Best Case : (0.04ms, 33.4MB)

## 전화번호 목록

```python
def solution(phone_book):
    word_dict = dict()
    for word in phone_book:
        word_dict[word] = 0

    for word in phone_book:
        for i in range(1, len(word)):
            prefix = word[:i]
            if prefix in word_dict:
                return False

    return True
```

- 정확성 테스트
  Worst Case : (8.06ms, 10.5MB)
  Best Case : (0.00ms, 10.2MB)
- 효율성 테스트
  Worst Case : (512.83ms, 46.8MB)
  Best Case : (1.18ms, 11.3MB)

## 위장

```jsx
function solution(clothes) {
  let answer = 1;
  const kinds = {};

  for (let [name, kind] of clothes) {
    if (kinds[kind]) {
      kinds[kind]++;
    } else {
      kinds[kind] = 1;
    }
  }

  for (let kind in kinds) {
    answer *= kinds[kind] + 1;
  }

  return answer - 1;
}
```

- 정확성 테스트
  Worst Case : (0.29ms, 33.4MB)
  Best Case : (0.07ms, 33.4MB)

# 베스트 앨범

```jsx
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
```

- 정확성 테스트
  Worst Case : (0.90ms, 33.6MB)
  Best Case : (0.18ms, 33.5MB)
