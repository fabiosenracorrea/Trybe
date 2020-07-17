// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(...args) {
  if (!args[0]) {//se nao tiver nada no args
    return 0
  } else {
    switch(args[0].operation) {
      case 'plus':
        return 0 + args[0].value;
      case 'minus':
        return 0 - args[0].value;
      case 'multiplication':
        return 0 * args[0].value;
      case 'division':
        return Math.floor((0 / args[0].value));
      default:
        'error'
    }
  }
}

function one(...args) {
  if (!args[0]) {//se nao tiver nada no args
    return 1
  } else {
    switch(args[0].operation) {
      case 'plus':
        return 1 + args[0].value;
      case 'minus':
        return 1 - args[0].value;
      case 'multiplication':
        return 1 * args[0].value;
      case 'division':
        return Math.floor((1 / args[0].value));
      default:
        'error'
    }
  }
}
function two(...args) {
  if (!args[0]) {//se nao tiver nada no args
    return 2
  } else {
    switch(args[0].operation) {
      case 'plus':
        return 2 + args[0].value;
      case 'minus':
        return 2 - args[0].value;
      case 'multiplication':
        return 2 * args[0].value;
      case 'division':
        return Math.floor((2 / args[0].value));
      default:
        'error'
    }
  }
}
function three(...args) {
  if (!args[0]) {//se nao tiver nada no args
    return 3
  } else {
    switch(args[0].operation) {
      case 'plus':
        return 3 + args[0].value;
      case 'minus':
        return 3 - args[0].value;
      case 'multiplication':
        return 3 * args[0].value;
      case 'division':
        return Math.floor((3 / args[0].value));
      default:
        'error'
    }
  }
}
function four(...args) {
  if (!args[0]) {//se nao tiver nada no args
    return 4
  } else {
    switch(args[0].operation) {
      case 'plus':
        return 4 + args[0].value;
      case 'minus':
        return 4 - args[0].value;
      case 'multiplication':
        return 4 * args[0].value;
      case 'division':
        return Math.floor((4 / args[0].value));
      default:
        'error'
    }
  }
}
function five(...args) {
  if (!args[0]) {//se nao tiver nada no args
    return 5
  } else {
    switch(args[0].operation) {
      case 'plus':
        return 5 + args[0].value;
      case 'minus':
        return 5 - args[0].value;
      case 'multiplication':
        return 5 * args[0].value;
      case 'division':
        return Math.floor((5 / args[0].value));
      default:
        'error'
    }
  }
}
function six(...args) {
  if (!args[0]) {//se nao tiver nada no args
    return 6
  } else {
    switch(args[0].operation) {
      case 'plus':
        return 6 + args[0].value;
      case 'minus':
        return 6 - args[0].value;
      case 'multiplication':
        return 6 * args[0].value;
      case 'division':
        return Math.floor((6 / args[0].value));
      default:
        'error'
    }
  }
}
function seven(...args) {
  if (!args[0]) {//se nao tiver nada no args
    return 7
  } else {
    switch(args[0].operation) {
      case 'plus':
        return 7 + args[0].value;
      case 'minus':
        return 7 - args[0].value;
      case 'multiplication':
        return 7 * args[0].value;
      case 'division':
        return Math.floor((7 / args[0].value));
      default:
        'error'
    }
  }
}
function eight(...args) {
  if (!args[0]) {//se nao tiver nada no args
    return 8
  } else {
    switch(args[0].operation) {
      case 'plus':
        return 8 + args[0].value;
      case 'minus':
        return 8 - args[0].value;
      case 'multiplication':
        return 8 * args[0].value;
      case 'division':
        return Math.floor((8 / args[0].value));
      default:
        'error'
    }
  }
}
function nine(...args) {
  if (!args[0]) {//se nao tiver nada no args
    return 9
  } else {
    switch(args[0].operation) {
      case 'plus':
        return 9 + args[0].value;
      case 'minus':
        return 9 - args[0].value;
      case 'multiplication':
        return 9 * args[0].value;
      case 'division':
        return Math.floor((9 / args[0].value));
      default:
        'error'
    }
  }
}

function plus(num) {
  return {
    operation: 'plus',
    value: num,
  }
}
function minus(num) {
    return {
    operation: 'minus',
    value: num,
  }
}
function times(num) {
    return {
    operation: 'multiplication',
    value: num,
  }
}
function dividedBy(num) {
    return {
    operation: 'division',
    value: num,
  }
}

//comentario:
//aqui faz-se uso de uma funcionalidade do JSES6+ que é o ...args.
// Pq facilita tanto? Pq precisamos de um jeito da função retornarar duas coisas diferentes:
// o própio numero se nada for passado OU o resultado de uma operação de seu numero com um numero recebido
// Ai que o ...args é util: se nada for passado, ele é um array vazio, e podemos checar um boolen com sua posição 0, distribuindo o resto da logica para os dois caminhos possiveis
// a função de operação é simples, já que precisa receber um número e passar adiante a sua operação e o número recebido - objeto!

// recebendo algo em ...args, basta checarmos qual das 4 operações recebemos e retornar o seu resultado.

