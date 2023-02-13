/**
 *
 * @param {array} lottos
 * @param {array} win_nums
 * @returns {array}
 */
function solution(lottos, win_nums) {
  const minWins = win_nums.filter((v) => lottos.includes(v));
  const maxWins = [...minWins, ...lottos.filter((v) => v === 0)];

  return [
    maxWins.length ? 7 - maxWins.length : 6,
    minWins.length ? 7 - minWins.length : 6,
  ];
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
