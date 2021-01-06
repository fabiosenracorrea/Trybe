function repeatedString(repeatGroup, numberOfChars) {
  const groupSize = repeatGroup.length;

  const letterArray = repeatGroup.split('');
  const letterToCount = 'a';

  const numberOfFullGroupsInN = Math.floor(numberOfChars / groupSize);
  const rest = numberOfChars % groupSize;
  const maxRestIndex = rest - 1;

  let letterCount = 0;
  let restCount = 0;

  letterArray.forEach((letter, index) => {
    if (letter === letterToCount) {
      letterCount += 1;

      if (index <= maxRestIndex) {
        restCount += 1;
      }
    }
  });

  letterCount *= numberOfFullGroupsInN;
  letterCount += restCount;

  return letterCount;
}

const s = 'aadcdaccacabdaabadadaabacdcbcacabbbadbdadacbdadaccbbadbdcadbdcacacbcacddbcbbbaaccbaddcabaacbcaabbaaa'
const n = 942885108885;

const ss = 'aba';
const nn = 10;

console.log(repeatedString(ss, nn));
