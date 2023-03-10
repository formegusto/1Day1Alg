function solution(files) {
  const splits = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const splitFile = [];
    let j = 0;
    // step 1 : 숫자가 발견될 때 까지
    splitFile.push("");
    while (isNaN(file[j]) || file[j] === " ") splitFile[0] += file[j++];

    // step 2 : 다음 문자가 나올 때 까지
    splitFile.push("");
    while (!isNaN(file[j]) && file[j] !== " ") splitFile[1] += file[j++];

    // step 3 : 나머지
    splitFile.push("");
    while (j < file.length) splitFile[2] += file[j++];

    splits.push(splitFile);
  }

  splits.sort(([aH, aN], [bH, bN]) => {
    if (aH.toLowerCase() !== bH.toLowerCase())
      return aH.toLowerCase() > bH.toLowerCase() ? 1 : -1;

    if (Number(aN) !== Number(bN)) return Number(aN) - Number(bN);

    return 1;
  });

  return splits.map((s) => s.join(""));
}

// solution(["foo9.txt", "foo010bar020.zip", "F-15"]);

solution([
  "imz12.png",
  "img10.png",
  "img02.png",
  "img1.png",
  "IMG01.GIF",
  "img2.JPG",
]);

solution([
  "F -5 Freedom Fighter",
  "B-50 Superfortress",
  "A-10 Thunderbolt II",
  "F-14 Tomcat",
]);
