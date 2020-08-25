# Javascript ES6 - HOFs - map & reduce

## O que vamos aprender?

Agora que você já entendeu o que é uma *Higher Order Function* e uma função de *callback* e aplicou esses conhecimentos para entender alguns dos novos métodos de interação e Array que o ES6 nos trouxe, chegou a hora de aprender o que são, talvez, as *HOFs mais importantes*: *map* e *reduce*.

## Você será capaz de:

* Transformar um array para aplicar alguma regra de negócio com o **Array.map**
* Utilizar um array de base para construir uma nova estrutura com o **Array.reduce**
* Utilizar HOFs em conjunto para obter o resultado final desejado.

## Por que isso é importante?

Durante a sua carreira como pessoa desenvolvedora de software, você irá se deparar com diversas **estruturas de dados**. Além disso, é altamente provável que você precise manipular essas estruturas para obter conclusões, aplicar regras de negócio ou, mesmo, **gerar outras estruturas a partir das que você já tem**.

O Array é uma estrutura bastante comum em todos os lugares, e seu uso vai muito além de simplesmente armazenar simples strings ou números. Por isso, é necessário que você saiba ler e extrair os dados armazenados de maneira eficiente e certeira.

Para ficar ainda mais claro: Imagine que você é responsável por uma rede de supermercados. O seu trabalho é, para o último mês:

* Fazer um balanço da quantidade vendida de cada produto
* Agrupar cada produto após o balanço em sua respectiva categoria (ex: bebidas, padaria, horti-frutti...);
* Calcular quanto cada categoria vendeu no total e adicionar este valor em cada respectiva categoria;
* Chegar ao valor total de receita deste mês, a partir dos produtos agrupados;

E tudo isso a partir de uma grande lista em que cada elemento é a compra feita por um cliente.

Ufa! Muita coisa, não é? 😅

Consegue pensar em uma forma de fazer tudo isso de uma forma relativamente simples e com pouco código?

Não se preocupe se a resposta for "não": hoje você vai conseguir fazer isso. (E muito mais!)

## Conteúdos

### Map

A primeira HOF que vamos abordar é a **array.map**.

Antes de pularmos para o código, precisamos ter atenção à quatro pontos importantíssimos:

* **O que a map retorna?**

1. A **map** retorna *um array* que possui o **mesmo tamanho** do array em que a executarmos.

* **Quais são os parâmetros que devo passar para a map?**

2. O único parâmetro que a **map** precisa é a função de *callback*

* __O que a minha função de *callback* recebe como parâmetro?__

3. Assim como nas outras HOFs, a função de *callback* que utilizamos com a **map** pode receber de 1 a 3 parâmetros, no formato:

```javascript
function callback(element, index, array) {
  // some code
  return element_modified;
}
```

Em que:

1. **element**: elemento em que estamos aplicando a função;
2. **index**: index do elemento em que estamos aplicando a função;
3. **array**: array em que estamos utilizando o map.

* **O que a função de callback deve retornar?**

4. O retorno da função de callback será o elemento que é inserido no novo array retornado pelo map. Pense dessa forma: o map irá executar a função de callback **uma vez em cada elemento de seu array**. O resultado dessa execução (ou seja, o retorno da função), será inserido no novo array **na mesma posição** do elemento em que a função foi aplicada. Não se preocupe se ficar um pouco confuso, no primeiro exemplo vamos ver um passo a passo de como isso funciona.

#### Quando você usaria o map?

Aqui, precisamos ter atenção ao fato que o **map** vai produzir, como resultado, um **array de mesmo tamanho**. O uso varia, mas em geral se você tem um array e precisa **transformar** os dados desse array antes de utilizá-lo, mantendo intacta a quantidade de items, provavelmente poderá utilizar. Vamos ver na prática!

Suponha que você tenha um array de números e precise, na verdade, de um array com estes números elevados ao quadrado. Utilizando o map, você teria este código:

```javascript
const numbers = [2, 4, 5, 7, 8, 10];

const numbersSquared = numbers.map((number) => number ** 2);

console.log(numbersSquared); // [4, 16, 25, 49, 64, 100]
```

Mas, o que aconteceu aqui? Vamos por partes:

1. O que a função de *callback* faz? Recebe um número como parâmetro e retorna este número elevado a 2.

2. Ao chamar o **map** no array *numbers*, a sua função de *callback* irá ser executada em cada elemento deste array;

3. Imagine que o **map** cria um array vazio, e para cada execução da *callback*, ele adiciona **o que foi retornado** da *callback* neste novo array.

4. O primeiro elemento, index 0, é o primeiro a passar pela função. Logo, temos 2 como parâmetro da nossa *callback* e, como `2 ** 2 === 4`, a função retorna 4, e o map adiciona este valor como sendo index 0 do **novo array**.

5. O próximo elemento, index 1, é o 4. Logo, 4 é passado pela função de *callback*, e, como `4 ** 2 === 16`, a função retorna 16 e o map adiciona este valor como sendo index 1 do **novo array**.

6. Isso acontece para cada elemento, até que chegamos no último: o elemento de index 5, que é o 10. Ele é passado para a *callback*, e, sendo `10 ** 2 === 100`, a função retorna 100 e o map adiciona este valor como sendo index 5 do **novo array**.

7. Finalizada a interação com o array, o map por fim retorna o **novo array**, contendo o **retorno de todas as interações** da *callback* nos elementos do *numbers*.

Essa descrição de código lhe parece familiar? Você com certeza já realizou alguma operação similar nos últimos meses, utilizando o tradicional *for* para isso. Veja o código abaixo, ele é completamente equivalente ao código utilizando o map:

```javascript
const numbers = [2, 4, 5, 7, 8, 10];

const numbersSquared = [];

for (let i = 0; i < numbers.length; i += 1) {
  numbersSquared[i] = numbers[i] ** 2;
}

console.log(numbersSquared); // [4, 16, 25, 49, 64, 100]
```

Você consegue perceber que, mesmo com um nível de complexidade pequeno, o segundo código é muito mais **verboso**, ou seja, possui muito mais declarações e palavras que temos que nos preocupar? Por exemplo, se nos esquecermos que não podemos acessar o index de mesmo número que a length do array, estaremos inserindo um *undefined* no final de nosso *numbersSquared*.

E ainda: imagine que você precise realizar outras operações com o array que você obteve de resultado. Para cada interação você vai ter que criar um novo *for*, ter cuidado com as variáveis inseridas, com o tamanho do novo array... Começa a ficar muito trabalhoso, e um "oceano de *for*s um atrás do outro, dificultando ainda o seu próprio entendimento do que o código está fazendo.

Vamos ao próximo exemplo: Pensando um pouco no exemplo que demos do supermercado, imagine que você tem uma lista de produtos, cada um contendo as seguintes informações:

* O nome do produto
* O preço unitário do produto
* O código de barras do produto
* A quantidade de cada produto

Fica fácil perceber que, se temos uma lista em que cada elemento possui essas informações, temos uma *lista de objetos*, não é mesmo? Pois bem, como você faria para, em posse dessa lista, obter uma lista apenas com os nomes desses produtos? Como queremos **transformar** os elementos de nossa lista de objetos para seus respectivos nomes, teremos um array final que possui o mesmo tamanho. Parece um trabalho para o map!

E, o código poderia ser assim:

```javascript
const products = [
  { name: "Desinfetante Veja", price: 9.99, barCode: 98293489238, quantity: 1},
  { name: "Ketchup Hellmann's", price: 7.99, barCode: 585122289238, quantity: 4},
  { name: "Milho Enlatado Zero-Six", price: 6.60, barCode: 56862359487, quantity: 6},
  { name: "Cereal Nescal Ball", price: 19.99, barCode: 19732584692, quantity: 2},
  { name: "Biscoito Trakinas", price: 4.99, barCode: 16749583215, quantity: 1},
];

const nameOfProducts = products.map((product) => product.name);

console.log(nameOfProducts); // ['Desinfetante Veja',"Ketchup Hellmann's", 'Milho Enlatado Zero-Six', 'Cereal Nescal Ball', 'Biscoito Trakinas']
```

Observe que, como queremos apenas o que está armazenado na propriedade *name* de cada produto, a nossa função retorna exatamente isso: o que está armazenado em cada *product.name*, que, claro, em cada interação do map, é um valor diferente, como visto no *console.log* ao final.

Até agora vimos algumas interações diretas, em que o retorno da *callback* é facilmente identificável e **segue a mesma regra** para todos os elementos. Mas isso não precisa acontecer! Você pode usar condicionais dentro de sua função de *callback* para **transformar** o seu elemento como quiser antes de retorná-lo para o map.

Suponha que, no exemplo dos números dado acima, nós queremos na realidade, que os números pares sejam elevados ao quadrado e os números ímpares elevados ao cubo. Veja:

```javascript
const numbers = [2, 4, 5, 7, 8, 10];

const mappedNumbers = numbers.map((number) => {
  if (number % 2 === 0) {
    return number ** 2;
  }
  return number ** 3;
});
```

Ou seja, no código acima a nossa função de *callback* irá entregar ao map, para cada interação, o quadrado do número *se ele é par*, caso contrário (ou seja, o número é impar), irá entregar o número ao cubo.

Você pode fazer quantos casos e operações com o elemento quiser, só se lembre de sempre **retornar** a transformação para que o novo array tenha exatamente aqui que você queria. Construa a sua função de *callback* pensando em como é o elemento que você recebe de parâmetro e como você quer que ele seja. O map vai apenas aplicar essa regra de negócio em todos os elementos do array, criando retornando o array com as modificações que você implementou.

Antes de prosseguirmos, você deve estar se perguntando como diferenciar o uso do **forEach** e do **map**, não é mesmo? Vamos dar uma olhada:

* **Retorno**: Enquanto o *forEach* **não** retorna **nada**, o *map* retorna um array com o exato tamanho do array em que ele é aplicado, contendo os elementos que sofreram as transformações aplicadas por você.

* **Callback**: Por **não** retornar nada, a função do *forEach* também não deve retornar nada, já que este retorno não vai ser usado para nada. Já no caso do *map*, o retorno da função de *callback* vai ser **exatamente** aquilo que será adicionado ao index correspondente do elemento iterado.

* **Especificidade**: Por **não** retornar nada, o *forEach* é uma HOF **genérica**. Você pode iterar sobre os elementos de um array para checar alguma condição, alterar alguma condição externa, etc. No entanto, quando você precisa iterar para obter um array **transformado** como retorno, o *map* é a opção **específica** para isso.

Suponha, então, que você tenha um array de pessoas estudantes da Trybe. Neste array você possui:

* O nome da pessoa estudante
* O sobrenome dela
* A idade dela
* As tecnologias favoritas dela

Como no exemplo do supermercado, fica fácil perceber que, com esse tanto de informação para cada elemento do nosso array, temos na verdade um *array de objetos*, novamente. Pois bem, sua tarefa é pegar este array e obter um array em que cada elemento é uma frase no seguinte formato:

```
"Fulano de tal tem 24 anos e 3 tecnologias favoritas!"
```

E, caso ele não tenha nenhuma tecnologia favorita,

```
"Fulano de tal não tem tecnologias favoritas :("
```

Este é o array que estamos falando:

```javascript
const trybeStudents = [
  {
    firstName: 'Robert',
    lastName: 'Smith',
    age: 33,
    techs: ['ReactJS', 'CSS', 'JSX', 'NodeJS']
  },
  {
    firstName: 'Joseph',
    lastName: 'Smith',
    age: 19,
    techs: ['ReactJS', 'HTML', 'NodeJS']
  },
  {
    firstName: 'Jennifer',
    lastName: 'Ainst',
    age: 25,
    techs: ['AngularJS', 'HTML', 'Typescript']
  },
  {
    firstName: 'Will',
    lastName: 'Hedge',
    age: 47,
    techs: ['NodeJS']
  },
  {
    firstName: 'Ross',
    lastName: 'Grunt',
    age: 39,
    techs: ['MongoDB', 'NodeJS']
  },
  {
    firstName: 'Julie',
    lastName: 'Lee',
    age: 53,
    techs: ['AdonisJS', 'Git', 'Javascript', 'Azure', 'Python']
  },
];
```

Consegue pensar em como resolver essa questão? Pense um pouco, antes de ler a solução comentada abaixo.

Novamente, aqui temos um caso que cada elemento do nosso array de base vai ser utilizado para produzir um array novo, contendo a mesma quantidade de elementos. Mas precisamos **transformar** esses elementos, não é mesmo? Afinal temos vários objetos e queremos que eles se transformem em uma string com seus dados. Vamos lá:

```javascript
const phrases = (
  trybeStudents
    .map((student) => {
      const studentName = `${student.firstName} ${student.lastName}`;
      const numberOfFavTechs = student.techs.length;

      if (numberOfFavTechs > 1) {
        return `${studentName} tem ${student.age} anos e ${numberOfFavTechs} tecnologias favoritas!`;
      } else if (numberOfFavTechs === 1) {
        return `${studentName} tem ${student.age} anos e 1 tecnologia favorita!`;
      } else {
        return `${studentName} não tem tecnologias favoritas`;
      }
    })
  );
```