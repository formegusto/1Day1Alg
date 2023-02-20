function solution(msg) {
  const dict = Array(26)
    .fill()
    .reduce((acc, _, idx) => {
      const ascii = 65 + idx;
      acc[String.fromCharCode(ascii)] = idx + 1;

      return acc;
    }, {});

  const output = [p];
  let dCursor = 27;
  let q = msg[0];
  for (let i = 1; i <= msg.length; i++) {
    const w = q;
    let c = "";
    if (i < msg.length) {
      c = msg[i];
    } else {
      output.push(dict[w]);
    }

    console.log(q, w, c);
    if (dict[w + c]) {
      q += c;
      continue;
    }

    dict[w + c] = dCursor++;
    q = c;
    output.push(w);
  }

  return output;
}

solution("KAKAO");
solution("TOBEORNOTTOBEORTOBEORNOT");
