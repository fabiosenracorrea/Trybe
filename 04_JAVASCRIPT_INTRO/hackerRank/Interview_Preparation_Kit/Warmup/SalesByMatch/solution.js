function sockMerchant(n, ar) {
  const sockCount = {};

  ar.forEach(sock => {
      if (sockCount[sock]) {
          sockCount[sock] += 1;
      } else {
          sockCount[sock] = 1;
      }
  });

  let pairs = 0;

  Object.values(sockCount).forEach(singleCount => {
      const availablePairs = Math.floor(singleCount / 2);

      pairs += availablePairs;
  });

  return pairs;
}
