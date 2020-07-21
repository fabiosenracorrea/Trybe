// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){
  let noHttp = url.replace(/https?:\/\//i, "");
  let noWww = noHttp.replace("www.", "");
  let dotIndex = noWww.indexOf(".");
  return noWww.slice(0, dotIndex);
}

/* explicação:
uma URL digitada pelo usuário pode ser interpretada de várias formas, mas existem 2 padrões que devemos observar:
1. existência ou não do protocolo HTTP, representado por suas 'variações' http:// ou https://
2. existência ou não do 'www.'

Para isso, precisamos checar se há tal existência e, se houver, dar um jeito de ignorá-las.

O .replace é interessante para isso, pq se existe o padrão que colocamos, ele substitui, mas, se não existe, nada acontece e a string é retornada da mesma forma

Explicação da regex pela didática:

- se tivéssemos apenas letras dentro de uma regex, o replace funcionaria igual se estivéssemos usando aspas;
  eg:
    str.replace(/fabio/i, "") == str.replace("fabio", "")
  (lembrando que o i representa que estamos ignorando a caixa do texto, e sem o g iremos substituir apenas a primeira ocorrência que encontrarmos)

- a letra que antecede o '?' significa que deve ser encontrada dentro do padrão que temos ZERO ou UMA vez. Existem variações para mais ocorrências

- como alguns caracteres tem funções especiais no regex, se quisermos encontrá-los em nossa string, devemos escapá-los.
  Para isso que serve a contra barra (\), que indica que o próximo elemento deve ser interpretado de forma literal.
  Como temos duas barras nas URLs (http:// pr ex), precisamos escapar novamente a próxima barra

Prefiriu-se usar a forma de string para substituir o 'www.' por ser algo constante (caso exista) na URL,
  mas reconhece-se que poderíamos ter encontrado uma URL em maíusculo, então uma sugestão de refatoração seria:
    str.replace(/www./i, "")

Depois de feitas as substituições, o dominio termina sempre no primeiro '.' depois dele,
logo basta encontrarmos o primeiro index de um '.' e usarmos o slice de 0 até ele, já que slice é non-inclusive com o end index
*/