function solution(input_string) {
  let answer = "";

  // [count, split]
  const dict = {
    [input_string[0]]: [1, 1],
  };
  for (let i = 1; i < input_string.length; i++) {
    if (!dict[input_string[i]]) {
      dict[input_string[i]] = [1, 1];
    } else {
      let [count, split] = dict[input_string[i]];
      if (input_string[i - 1] !== input_string[i]) split++;
      dict[input_string[i]] = [count + 1, split];
    }
  }
  const entry = Object.entries(dict).filter(
    ([_, [count, split]]) => count >= 2 && split >= 2
  );

  return entry.length
    ? entry
        .sort(([str1], [str2]) => (str1 > str2 ? 1 : -1))
        .map(([str]) => str)
        .join("")
    : "N";
}
