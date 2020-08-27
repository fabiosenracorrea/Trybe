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
    techs: ['ReactJS', 'CSS', 'JSX', 'NodeJS'],
  },
  {
    firstName: 'Joseph',
    lastName: 'Smith',
    age: 19,
    techs: ['ReactJS', 'HTML', 'NodeJS', 'CSS', 'JSX'],
  },
  {
    firstName: 'Jennifer',
    lastName: 'Ainst',
    age: 25,
    techs: ['AngularJS', 'HTML', 'Typescript'],
  },
  {
    firstName: 'Will',
    lastName: 'Hedge',
    age: 47,
    techs: ['NodeJS'],
  },
  {
    firstName: 'Ross',
    lastName: 'Grunt',
    age: 39,
    techs: ['MongoDB', 'NodeJS'],
  },
  {
    firstName: 'Julie',
    lastName: 'Lee',
    age: 53,
    techs: ['AdonisJS', 'Git', 'Javascript', 'Azure', 'Python'],
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

Não se assuste com a estrutura do código acima, apenas quebramos as linhas para facilitar a sua visualização do que está sendo feito. Observe que, para cada estudante, construímos a frase com base em seus dados na função de *callback* e, de acordo com a quantidade de tecnologias favoritas, **retornarmos** a frase específica, que sera adicionada no respectivo index do array *phrases*. Será que deu certo? Copie este código em seu editor e dê um *console.log* no *phrases*. Se quiser, brinque um pouco com as condicionais e os resultados dos retornos que você colocar e veja que tipo de alteração isso causa no resultado final.

### Reduce

Talvez ainda mais poderosa que a *map*, a *reduce* é a HOF que requer um pouco mais de sua atenção. Mas calma! Não precisa se desesperar. É só por que ela tem uma estrutura diferente da maioria das HOFs que vimos até aqui. Vamos responder as mesmas 4 perguntas que respondemos para o map acima:

* **O que a reduce retorna?**

1. A **reduce** retorna o "acumulador", que é uma variável que sofre alteração à cada iteração da *callback* no array.

* **Quais são os parâmetros que devo passar para a reduce?**

2. A reduce aceita **dois** parâmetros, sendo o segundo opcional:

  1. a função de *callback*
  2. o valor inicial para o "acumulador".

*Caso não seja passado um valor inicial, ele será igual o primeiro elemento do array que estamos iterando!*

* __O que a minha função de *callback* recebe como parâmetro?__

3. Diferente das outras HOFs, a função de *callback* recebe de 2 a 4 parâmetros. Mas não se preocupe, a estrutura é quase igual:

```javascript
function callback(accumulator, element, index, array) {
  // some code
  return new_accumulator_value;
}
```

Em que:

  1. **accumulator**: valor atual do "acumulador" na iteração atual;
  2. **element**: elemento em que estamos aplicando a função;
  3. **index**: index do elemento em que estamos aplicando a função;
  4. **array**: array em que estamos utilizando o map.

* **O que a função de callback deve retornar?**

4. O retorno da função de callback será o novo valor do "acumulador", depois de aplicadas as condições impostas durante a função.

Mas, afinal, o que é esse "acumulador"?

É **qualquer** tipo de variável que você quer que carregue algo do elemento que estamos iterando para o próximo.

Pense no exemplo do supermercado: temos um array contendo vários produtos, com seus respectivos preços e códigos de barras. Mas no final de contas, só o que interessa para o supermercado é somar o preço de cada produto para chegar no valor final que você tem de pagar. Isso pode ser a aplicação de um *reduce* no nosso array de produtos!

Para ficar ainda mais claro, vamos pensar o seguinte:

Quando estamos com nossas compras no caixa, podemos interpretar a situação como sendo a seguinte:

* Cada produto em nosso carrinho de compras é um elemento de um array. Ele contém nome, código de barras preço.
* O computador com código de barras é a função de *callback*: Para cada produto, ele vai ver o código de barras para identificar o produto e pegar somente o *preço* para armazenar. Na próxima leitura de produto, o computador já vai começar sabendo o preço do produto antigo, e vai apenas somar à ele o preço do produto recém scaneado, salvado, agora, o preço total até então. Isso se repete até que os produtos sejam todos encerrados, ao passo que o computador vai ter o seu último valor salvo: o valor de todas as somas.
* A pessoa atendente operando o computador é o *reduce*: ela vai pegar cada produto de seu carrinho e *passar pelo computador*. Quando acabarem os produtos, ela irá te *retornar* o último valor que o computador tem salvo: o valor de todas as somas.

Agora vamos ver como isso ficaria em código:

```javascript
const products = [
  { name: "Desinfetante Veja", price: 10, barCode: 98293489238},
  { name: "Ketchup Hellmann's", price: 8, barCode: 585122289238},
  { name: "Milho Enlatado Zero-Six", price: 6, barCode: 56862359487},
  { name: "Cereal Nescal Ball", price: 20, barCode: 19732584692},
  { name: "Biscoito Trakinas", price: 5, barCode: 16749583215},
];

const payableAmount = products.reduce((accumulator, product) => accumulator + product.price, 0);

console.log(payableAmount); // 49
```
Observe atentamente a linha que define o *payableAmount*. Você consegue perceber porque tivemos que colocar um 0 como **segundo parâmetro da reduce**? Se não, volte ao ponto 2 acima. É exatamente pelo fato de que, como temos um **array de objetos**, se não colocarmos um *valor inicial* para o "acumulador", ele será automaticamente o valor do primeiro elemento do nosso array, que é um **objeto**. E ai, ao tentarmos fazer uma soma entre um objeto e um número, não chegaríamos no resultado que queremos.

Novamente, vamos por partes para entender o que aconteceu:

1. O que a função de *callback* faz? Recebe dois números e retorna a soma deles.

2. Ao chamar o **reduce** no array *products*, a sua função de *callback* irá ser executada em cada elemento deste array;

3. O **reduce** cria uma variável para armazenar o valor inicial do "acumulador". Como neste casos passamos um valor inicial, ele estabelece exatamente o que passamos como este valor. Caso contrário, ele selecionaria o primeiro elemento do array para este valor inicial de forma automática.

4. O primeiro elemento, index 0, é o objeto relativo ao "Desinfetante Veja". Logo, a nossa função de *callback* vai receber o "acumulador" e este objeto como parâmetros. A função retorna o resultado da conta `accumulator + product.price`, que, para este caso, é igual a `0 + 10`. Ou seja, **retorna 10**. Este é o **novo valor do acumulador**.

5. O próximo elemento, index 1, é o objeto relativo ao "Ketchup Hellmann's". Logo, o *reduce* vai pegar o valor atualizado do "acumulador", ou seja, 10, e vai colocar como parâmetro para nossa *callback*, assim como o objeto do Ketchup. A função de *callback*, recebendo estes parâmetros, retorna `accumulator + product.price`. Como o nosso `product` é agora o Ketchup, isso se traduz para `10 + 8`, e a função **retorna 18**. Este é o **novo valor do acumulador**.

6. Isso acontece para cada elemento, até que chegamos no último: o elemento de index 4, que é objeto do Biscoito Trakinas. Ele é passado para a *callback*, juntamente com o "acumulador", que agora tem valor de 44. E, sendo `44 + 5 === 49`, a função retorna 49. Então este é o **novo valor do acumulador**.

7. Finalizada a interação com o array, o *reduce* por fim retorna o valor final do **acumulador**, que é o que é salvo na variável *payableAmount*.

Você consegue perceber a diferença entre o *map* e o *reduce*? Enquanto o map nós usamos para **transformar** o array de alguma forma, o reduce nós usamos para **reduzir** o array a algo. Mas cuidado: o reduce não é possui utilidade apenas para reduzirmos nossos elementos à números, como fizemos acima.

Imagine que nós temos o mesmo array de produtos, mas agora queremos obter um **objeto** que contenha a seguinte estrutura:

```javascript
const result = {
  products: 0,
  totalPrice: 0,
};
```

Primeiro de tudo, como sabemos que o reduce pode ser uma HOF que irá nos ajudar com este problema?

Bem, nós temos um array de *n elementos* e queremos, no final *um* objeto. Percebe a diferença de grandeza? De *n elementos* para *um elemento*. E qual é este elemento **não importa**. Pode ser um número, como fizemos acima, um objeto, como iremos fazer agora, uma string, até mesmo um outro array. Basta que você tenha atenção em como tratar o "acumulator" e o "element" que a função de *callback* recebe de parâmetro obrigatoriamente.

Veja como fica o código para obtermos a estrutura de objeto acima:

```javascript
const products = [
  { name: "Desinfetante Veja", price: 10, barCode: 98293489238},
  { name: "Ketchup Hellmann's", price: 8, barCode: 585122289238},
  { name: "Milho Enlatado Zero-Six", price: 6, barCode: 56862359487},
  { name: "Cereal Nescal Ball", price: 20, barCode: 19732584692},
  { name: "Biscoito Trakinas", price: 5, barCode: 16749583215},
];

const baseObject = {
  products: 0,
  totalPrice: 0,
};

const result = products.reduce((accumulator, product) => {
  accumulator.products += 1;
  accumulator.totalPrice += product.price;
  return accumulator
}, baseObject);

console.log(result) // { products: 5, totalPrice: 49 }
```

Observe que, agora, estamos **sempre retornando** o acumulador da função de *callback*. Mas atenção! Não é exatamente o mesmo objeto que entra na função, porque estamos *alterando o valor de suas propriedades*. Você consegue perceber o que aconteceria se esquecermos do `return accumulator`? Tente fazer essa alteração em seu código e verifique o que acontece. É por isso que nunca podemos nos esquecer de **retornar o valor que queremos para o acumulador** depois de aplicar todas as regras de negócio dentro de nossa *callback*.

Assim como no map (ou em qualquer HOF), você pode aplicar regras condicionais que influenciam no valor que será retornado como acumulador.

Imagine que você queira somar apenas os números pares do array que vimos antes. Como você faria?

```javascript
const numbers = [2, 4, 5, 7, 8, 10];

const sumOfEven = numbers.reduce((accumulator, number) => {
  if (number % 2 === 0) {
    return accumulator + number;
  }
  return accumulator;
} , 0);

console.log(sumOfEven); //
```

**Importante**: Aqui, mesmo que os elementos sejam todos números e estejamos somando, precisamos definir um valor inicial de 0 para o nosso *accumulator*. Consegue perceber porque? Dica: imagine que o primeiro elemento do nosso array fosse um número ímpar. O resultado final seria o correto?

Outro ponto: lembre-se que __o retorno da função de *callback* será o novo valor do "acumulador" no próxima iteração__. Isso significa que, quando o número é ímpar, queremos continuar carregando o valor da soma de pares igualzinho ele está, até acharmos (se acharmos) um novo valor par. Esse detalhe pode ser visto com clareza aqui, em que o exemplo é uma soma, mas se aplica à todos os casos.

Um exemplo rápido: Como você faria para encontrar a idade média dos estudantes da Trybe que apresentamos acima?

Tente fazer antes de verificar a solução apresentada abaixo.

```javascript
const avgAge = (trybeStudents.reduce((accumulator, student) => accumulator + student.age , 0) / trybeStudents.length);

console.log(avgAge) // 36
```

Aqui vemos um exemplo claro que precisamos entender **o que é retornado ao final** da execução do *reduce*. Como estamos inicializando o acumulador como um número, e performando apenas operações com números em nossa *callback*, o resultado final com certeza será um número. E, por isso, podemos tratá-lo como tal e fazer operações com ele.

Agora que você já aprendeu as HOFs mais importantes, pode utilizar os seus conhecimentos para utilizá-las **em cadeia**. Basta ter atenção **ao retorno de cada HOF**.

Mas existem casos em que queremos alterar mais de uma vez os dados que temos para obter o resultado desejado. Pense no exemplo em que construímos o array de frases com as pessoas estudantes da trybe. Nele retornamos uma frase com base na quantidade de tecnologias favoritas, não é mesmo? E se quisermos obter, na verdade, um array com as frases apenas para estudantes com *30 ou menos anos*, ordenado de forma alfabética?

Temo um problema que parece relativamente complexo, mas vamos quebrá-lo em partes:

* Precisamos obter um array só com as pessoas estudantes de até 30 anos
* Depois disso, precisamos gerar o array com as frases para elas
* Por fim, precisamos ordenar o array de frases

Consegue perceber que, para cada caso, uma HOF se aplica? Como você faria para aplicar cada HOF, uma em seguida da outra?

Vamos pensar em quais HOFs vamos usar:

* Para obter um array "filtrado", fica claro que precisamos do *filter*
* Para **transformar** o array de estudantes em frases, vimos acima. Precisamos do *map*
* Para ordenar de forma alfabética, fica fácil. Precisamos do *sort*

E, para aplicar:

```javascript
const orderedPhrasesBelow30 = (
  trybeStudents
    .filter((student) => (student.age <= 30))
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
    .sort()
);

console.log(orderedPhrasesBelow30); // teste você mesmo!
```

Não se assuste com a forma do código acima, ele está apenas utilizando quebras de linhas para que você visualize melhor cada chamada de HOF "em cadeia". Por que podemos fazer isso?

Por causa do **retorno** de cada função. Observe bem: tanto a *filter* quanto a *map* retornam um **array** depois de executadas. Se elas retornam um array, significa que podemos chamar um método dele, não é mesmo? É exatamente isso que fizemos aqui!

Tente você mesmo: Aqui ordenamos as frases de forma alfabética. E se quiséssemos ordenar de acordo com a idade? Ou a quantidade de tecnologias favoritas? Teríamos que alterar a ordem de chamada das HOFs? Mande a sua sugestão de sugestão lá no *slack*, e discuta com os seus colegas formas de fazer com que isso seja possível 🤩

## Exercícios

Atenção! Os exercícios abaixo foram feitos pensando em resoluções utilizando as HOFs aprendidas até aqui. Tente utilizá-las para resolver os problemas apresentados, mesmo que sua intuição seja usar um *for* tradicional.

Considere o array de objetos abaixo. Ele será necessário para os exercícios de 1 a 4.

```javascript
const universities = [
  {
    name: 'Universidade de Minas Gerais',
    acronym: 'UFM',
    overallGrade: null,
    address: {
      street: 'Rua Da Universidade MG',
      number: 1170,
      city: 'Belo Horizonte',
      state: 'MG',
      country: 'Brazil'
    },
    courses: [
      {
        course: 'Engineering',
        grade: 3,
        campus: 'City',
        duration: 4,
        mode: 'Full time',
        entryGrade: 770,
      },
      {
        course: 'Computer Science',
        grade: 4,
        campus: 'City',
        duration: 3.5,
        mode: 'Full time',
        entryGrade: 750,
      },
      {
        course: 'Ancient History',
        grade: 2,
        campus: 'City',
        duration: 7,
        mode: 'Part time',
        entryGrade: 600,
      },
    ],
  },
  {
    name: 'Universidade de São Paulo',
    acronym: 'UFSP',
    overallGrade: null,
    address: {
      street: 'Rua Da Universidade SSPU',
      number: 482,
      city: 'São Paulo',
      state: 'SP',
      country: 'Brazil'
    },
    courses: [
      {
        course: 'Engineering',
        grade: 4,
        campus: 'City-1',
        duration: 4,
        mode: 'Full time',
        entryGrade: 800,
      },
      {
        course: 'Computer Science',
        grade: 3,
        campus: 'City-2',
        duration: 3.5,
        mode: 'Full time',
        entryGrade: 710,
      },
      {
        course: 'Ancient History',
        grade: 4,
        campus: 'City-2',
        duration: 8,
        mode: 'Part time',
        entryGrade: 700,
      },
      {
        course: 'Business',
        grade: 4,
        campus: 'City-1',
        duration: 3,
        mode: 'Full time',
        entryGrade: 743,
      },
      {
        course: 'Medicine',
        grade: 5,
        campus: 'Health',
        duration: 5.5,
        mode: 'Full time',
        entryGrade: 835,
      },
    ],
  },
  {
    name: 'Universidade de Palmas',
    acronym: 'UTO',
    overallGrade: null,
    address: {
      street: 'Rua Da Universidade TOUF',
      number: 777,
      city: 'Tocantins',
      state: 'TO',
      country: 'Brazil'
    },
    courses: [
      {
        course: 'Medicine',
        grade: 2.5,
        campus: 'Health+',
        duration: 6,
        mode: 'Full time',
        entryGrade: 710,
      },
      {
        course: 'Computer Science',
        grade: 2,
        campus: 'City',
        duration: 4,
        mode: 'Full time',
        entryGrade: 468,
      },
    ],
  },
  {
    name: 'Universidade Nova São Paulo',
    acronym: 'UNSP',
    overallGrade: null,
    address: {
      street: 'Rua Da Nova Global',
      number: 653,
      city: 'São Paulo',
      state: 'SP',
      country: 'Brazil'
    },
    courses: [
      {
        course: 'Art History',
        grade: 3,
        campus: 'City',
        duration: 3,
        mode: 'Full time',
        entryGrade: 496,
      },
      {
        course: 'Computer Science',
        grade: 2,
        campus: 'City',
        duration: 3.5,
        mode: 'Full time',
        entryGrade: 517,
      },
      {
        course: 'Public Policy',
        grade: 4,
        campus: 'City',
        duration: 6.5,
        mode: 'Part time',
        entryGrade: 580,
      },
    ],
  },
  {
  name: 'Exvort University',
  acronym: 'ExUn',
  overallGrade: null,
  address: {
    street: 'New York Street',
    number: 120,
    city: 'Boston',
    state: 'MA',
    country: 'USA'
  },
  courses: [
    {
      course: 'Art History',
      grade: 5,
      campus: 'City',
      duration: 4,
      mode: 'Full time',
      entryGrade: 760,
    },
  ],
},
];
```
1. Crie um array que contenha todos os nomes das universidades acima, em ordem alfabética.

2. Construa um array de strings no formato `NOME_UNIVERSIDADE: ENDEREÇO_COMPLETO.` O endereço completo caracteriza-se como, por exemplo: `Rua de tal, nº 444, cidade, estado, país.`

3. Crie um array de strings que estejam no formato `SIGLA: CIDADE`, mas que só contenha cidades do Brasil e esteja ordenada em ordem alfabética.

4. Construa um array de objetos que contenha o nome da universidade, a sua sigla, a quantidade de campus diferentes e a quantidade de cursos que ela oferece.

Considere o array de objetos abaixo. Ele será necessário para os exercícios 5 e 7.

```javascript
const products = [
  { name: "Desinfetante Veja", price: 10, barCode: 98293489238, quantity: 1},
  { name: "Ketchup Hellmann's", price: 8, barCode: 585122289238, quantity: 4},
  { name: "Milho Enlatado Zero-Six", price: 6, barCode: 56862359487, quantity: 6},
  { name: "Cereal Nescal Ball", price: 20, barCode: 19732584692, quantity: 2},
  { name: "Biscoito Trakinas", price: 5, barCode: 16749583215, quantity: 1},
];
```

5. Calcule o valor total da compra do cliente.

6. Suponha que o supermercado esteja com uma promoção: caso você compre 4 ou mais produtos, um desconto é concedido. Crie um array de produtos que tenha, além de seu nome, a propriedade 'discount' que recebe *true* ou *false* de acordo com o desconto concedido.

7. A partir do array selecionado, crie um objeto que contenha uma lista com os produtos comprados, a quantidade total de itens comprados e o valor total gasto pelo cliente nesta compra. Depois, certifique-se de ordenar essa lista de produtos em ordem alfabética.

## Exercícios Bônus

Estes exercícios também estão relacionados ao array de universidades.

1. Observe que a `overallGrade` de cada universidade foi apagada. Crie um array de objetos que contenham o nome da universidade, a sua *overallGrade* e o país em que ela está localizada.

2. A partir do array das universidades, obtenha uma lista que contenha todos os cursos ofertados por universidades brasileiras. Não se esqueça de adicionar o nome de cada universidade dentro de cada curso!

3. A partir do array de cursos obtido no exercício anterior, obtenha um objeto que contenha, a quantidade de cursos disponíveis, a nota e a duração média de todos esses cursos, e a maior nota de corte encontrada. O objeto deve ser neste formato:

```javascript
const obj = {
  country: 'Brazil',
  avgGrade: // calcule
  avgDuration: // calcule
  highestEntryGrade: // calcule
}
```



