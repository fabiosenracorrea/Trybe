const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function addProp(obj, key, value) {
  return obj[key] = value;
}

// 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function listKeys(obj) {
  return Object.keys(obj);
}

// 3 Crie uma função para mostrar o tamanho de um objeto.

function objSize(obj) {
  return Object.keys(obj).length;
}

// 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function objValues(obj) {
  return Object.values(obj);
}

// 5 Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons= {};
Object.assign(allLessons.lesson1 = {}, lesson1);
Object.assign(allLessons.lesson2 = {}, lesson2);
Object.assign(allLessons.lesson3 = {}, lesson3);

// or:
const allLessons2 = {
  lesson1: {...lesson1},
  lesson2: {...lesson2},
  lesson3: {...lesson3},
}

// 6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

function totalStudents(obj) {
  let students = 0;
  Object.values(obj).forEach((lesson) => students += lesson.numeroEstudantes);
  return students;
}

// 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

function getValueByIndex(obj, ind) {
  return Object.values(obj)[ind];
}

// 8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

function verifyPair(obj, key, val) {
  return (key in obj && obj[key] === val);
}

// 9 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

function classStudents(obj, lesson) {
  let studentsPerClass = 0;
  Object.values(obj).forEach((less) => {
    if (less.materia === lesson) {
      studentsPerClass += less.numeroEstudantes;
    }
  })
  return studentsPerClass;
}

// 10 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

function createReport(obj, professor) {
  let report = {
    professor,
    aulas: [],
    estudantes: 0,
  }

  Object.values(obj).forEach((lesson) => {
    if (lesson.professor === professor) {
      report.aulas.push(lesson.materia);
      report.estudantes += lesson.numeroEstudantes;
    }
  })

  return report;
}

