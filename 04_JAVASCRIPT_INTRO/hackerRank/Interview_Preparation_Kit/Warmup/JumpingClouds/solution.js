function jumpingOnClouds(clouds) {
  let steps = 0;
  let currentJumpedIndex = 0;

  const lastIndex = clouds.length - 1;

  clouds.forEach((_, index) => {
    if (index === currentJumpedIndex && index !== lastIndex) {
      steps += 1;
      const twoJumpOk = (clouds[index + 2] === 0);

      if (twoJumpOk) {
        currentJumpedIndex += 2;
      } else {
        currentJumpedIndex += 1;
      }
    }
  });

  return steps;
}

const test = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0];
