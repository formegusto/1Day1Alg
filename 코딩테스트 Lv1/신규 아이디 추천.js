/**
 *
 * @param {string} new_id
 * @returns {string}
 */
function solution(new_id) {
  // 1. 대문자를 모두 소문자로
  new_id = new_id.toLowerCase();

  // 2. 소문자, 숫자, -, _, . 제외하고 모두 제거
  new_id = new_id.replace(/[^a-z0-9-_.]/g, "");

  // 3. 연속된 .. 를 .로 치환
  new_id = new_id.replace(/[.]+/g, ".");

  // 4. 마침표가 처음이나 끝에 위치한다면 제거
  if (new_id[0] === ".") new_id = new_id.slice(1);
  if (new_id[new_id.length - 1] === ".") new_id = new_id.slice(0, -1);

  // 5. new_id가 빈 문자열이라면, new_id에 a를 대입한다.
  if (!new_id.length) new_id = "a";

  // 6. new_id의 길이가 16자 이상이면, 15개 문자를 제외한 나머지 문자들은 모두 제거
  // 끝에 마침표 있으면 제거
  new_id = new_id.slice(0, 15);
  if (new_id[new_id.length - 1] === ".") new_id = new_id.slice(0, -1);

  // 7. new_id 길이가 2자 이하일 때, 길이가 3이 될 때까지 마지막 문자 반복
  while (new_id.length < 3) new_id += new_id[new_id.length - 1];

  return new_id;
}
