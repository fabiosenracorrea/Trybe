function solution(input, markers) {
  let answer = input;
  markers.forEach((marker) => {
    let preRegex = '\\' + marker + '+' + '.' + '*';
    let markerRegex = new RegExp(preRegex, 'gm');
    answer = answer.replace(markerRegex, '');
  })

  answer = answer.replace(/\s$/gm, '');

  return answer.trim();
};