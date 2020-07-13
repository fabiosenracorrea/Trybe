// 1- Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b, definidas no começo com os valores que serão operado

function adicao(a,b) {
  return a+b;
}
function subtracao(a,b) {
  return a-b;
}
function multiplicacao(a,b) {
  return a*b;
}
function divisao(a,b) {
  return a/b;
}
function modulo(a,b) {
  return a%b;
}

// 2 - Faça um programa que retorne o maior de dois números.

function maior(a,b) {
  return (a > b) ? a : b;
}

// 3 - Faça um programa que retorne o maior de três números.

function maior3(a,b,c) {
  let li = [a,b,c];
  let maior = null;
  for (let i = 0; i < li.length; i++) {
    if (maior < li[i]) {
      maior = li[i];
    }
  }
  return maior
}

// 4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function valor(num) {
  if (num > 0) {
    return 'positive';
  } else if (num < 0) {
    return 'negative';
  } else if (num === 0) {
    return 'zero';
  } else {
    return 'please input a number';
  }
}

// 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

function triangulo(a,b,c) {
  return (a+b+c === 180)
}

// 6 -Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

function xadrez_help(peca) {
  let inp = peca.toLowerCase();
  switch(inp) {
    case('rei'):
      return 'Move-se para todas as direções, uma casa por vez';
      break;
    case('rainha'):
      return 'Move-se em todas as direções';
      break;
    case('bispo'):
      return 'move-se pela diagonal';
      break;
    case('cavalo'):
      return 'move-se em L';
      break;
    case('torre'):
      return 'move-se em linha reta (ver/hoz)';
      break;
    case('peao'):
      return 'move-se apenas 1 casa para frente e come apenas na diagonal superior';
      break;
    default:
      return 'peça não reconhecida, tente novamente';
      break;
  }
}

// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

function conceito(nota) {

  if (nota < 0 || nota > 100) {
    return 'Erro, nota deve ser entre 0 e 100'
  } else if (nota >= 90 && nota <= 100) {
    return 'A';
  } else if (nota >= 80) {
    return 'B';
  } else if (nota >= 70) {
    return 'C';
  } else if (nota >= 60) {
    return 'D';
  } else if (nota >= 50) {
    return 'E';
  } else if (nota < 50 && nota>= 0) {
    return 'F';
  } else {
    return 'Erro, nota não identificada'
  }
}

// 8 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par. Caso contrário, ele retorna false.

function um_par(a,b,c) {
  return (a%2 === 0 || b%2 === 0 || c%2 === 0);
}

// 9 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for ímpar. Caso contrário, ele retorna false.

function um_par(a,b,c) {
  return (a%2 !== 0 || b%2 !== 0 || c%2 !== 0);
}

// 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. Imposto sob custo 20%.

function lucro(custo, venda, unidades) {
  if (venda < 0 || custo < 0 || unidades < 0) {
    return 'erro, valores negativos inseridos'
  }
  let lucro = (venda - custo*1.2)*unidades;
  return `O lucro de ${unidades} unidades vendidas foi de ${lucro}`;
}

// 11 -Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

function salario_liquido(salario) {
  let salario_inss = salario;
  let imposto = 0;
  let parcela_deducao = 0
  if (salario <= 1556.94) {
    salario_inss *= 0.92;
  } else if (salario < 2594.92) {
    salario_inss *= 0.91;
  } else if (salario < 5189.82) {
    salario_inss *= 0.89;
  } else {
    salario_inss = salario - 570.88;
  }

  if (salario_inss <= 1903.98) {
    return salario_inss;
  } else if (salario_inss < 2826.66) {
    parcela_deducao = 142.8;
    imposto = 0.075;
    return salario_inss - (salario_inss*imposto - parcela_deducao)
  } else if (salario_inss < 3751.06) {
    parcela_deducao = 354.8
    imposto = 0.15;
    return salario_inss - (salario_inss*imposto - parcela_deducao)
  } else if (salario_inss < 4664.69) {
    parcela_deducao = 636.13;
    imposto = 0.225;
    return salario_inss - (salario_inss*imposto - parcela_deducao)
  } else {
    parcela_deducao = 869.36
    imposto = 0.275;
    return salario_inss - (salario_inss*imposto - parcela_deducao)
  }
}

console.log(salario_liquido(3000));