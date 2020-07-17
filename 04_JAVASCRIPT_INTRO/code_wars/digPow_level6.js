// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.



function digPow(n, p){
  let textValue = String(n);
  let sum = 0;
  for (let i = 0; i < textValue.length; i += 1) {
    sum += (+textValue[i])**(p+i)
  }
  if (sum % n === 0) {
    return (sum/n)
  } else {
    return -1
  }
}

//comentario
//resolução bem simples, basta listar os passos:
// transformar em string pra interar seus numeros
// interar de 0 a length, pq podemos aproveitar o i tanto pra posição quanto pra incremento unitário do p, como pedido
// saber se n cabe inteiro do resultado com %