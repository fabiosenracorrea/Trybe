function countingValleys(steps, path) {
  let level = 0;
  let valleys = 0;

  const stepToNumber = {
    'U': 1,
    'D': -1,
  };

  path.split('').forEach(step => {
    const changeInLevel = stepToNumber[step];

    const oldLevel = level;
    level += changeInLevel;

    if (oldLevel < 0 && level === 0) {
      valleys += 1;
    }
  });

  return valleys;
}
