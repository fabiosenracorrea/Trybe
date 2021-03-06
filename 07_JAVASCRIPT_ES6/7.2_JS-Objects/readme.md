## 7.2 JAVASCRIPT OBJECTS

A big part of todays web data management have JS Objects as a fundamental part of it. Understanding how to use and manipulate them is a minimum requirement.

### What was covered here?

* Object.assign();
* Object.entres();
* Object.keys();
* Object.values();
* REST operator to duplicate objects

#### Exercises

```
Para os exercícios a seguir, use o seguinte código.

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

1. Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

3. Crie uma função para mostrar o tamanho de um objeto.

4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

9. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

10. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.
```

###### Feedback

As always, any feedback or suggestion is welcomed.
