function substituteX(str) {
  return "Tryber x aqui".replace('x', str);
}

const skills = ['HTML', 'JS', 'React', 'CSS', 'SQL'];

function printSkills(str, skills) {
  let sorted = skills.sort();
  return `
    ${str}
    Minhas cinco principais habilidades são:
    ${sorted[0]}
    ${sorted[1]}
    ${sorted[2]}
    ${sorted[3]}
    ${sorted[4]}
    #goTrybe.
  `
}

console.log(printSkills(substituteX('Fábio'), skills))