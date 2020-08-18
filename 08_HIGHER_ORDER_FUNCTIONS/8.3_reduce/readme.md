## 8.3 - Reduce Method

### What was covered here?

One last array method that needs to be covered is **reduce**. And given it's importance (and power), a whole lesson for it was dedicated.

### Exercises on this lesson

#### Exercise 1

Dada uma matriz de matrizes, transforme em uma única matriz.
(flatter a matrix and return it)

-> Gotta remember that each reduce iteration checks an entire array. Then, a forEach inside the reduce does the trick. [Check it out here](./exercises/exercise1.js)

#### Exercise 2

Crie uma string com os nomes de todas as pessoas autoras.
(Create a string with every author name)

-> A single reduce with a string start does the trick. [Check it out here](./exercises/exercise2.js)

#### Exercise 3

Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
(Calculate the average age that every author had when the respective book was published.)

-> A single reduce does the job. [Check it out here](./exercises/exercise3.js)

### Exercise 4

Encontre o livro com o maior nome.
(Find the book with the largest name)

-> Again, a single reduce does the job. Just gotta remember you dont have to 'add' each element if you dont need to. [Check it out here](./exercises/exercise4.js)

#### Exercise 5

Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
(Given an array of names, return how many times the letter a shows up (case insensitive))

-> A simple reduce using accumulating the length of .match(/a/ig) [Check it out here](./exercises/exercise5.js)

#### Exercise 6

Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos.
(Create an array of objects that have the structure shown, registering each student average)

-> Here we have to first map the student array to then return an object with a reduced average from the grades array and it's name. [Check it out here](./exercises/exercise6.js)

#### Comments

Reduce is a powerful tool in JS. A lot of rather complex code can be 'reduced' (pun intended) using this method. As such, understanding what you can do with it is crucial.

###### Feedback

As always, any feedback or suggestion is welcomed.