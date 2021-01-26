# Controller & Service Exercises

**Exercício 1 :** Nesse exercício, você vai desenvolver uma aplicação MSC para consulta de CEPs, chamada cep-lookup . Você utilizará uma API para buscar os dados relacionados a um CEP e salvará esses dados no MongoDB.

Um CEP válido é composto por 8 dígitos, com um hífen opcional separando os três últimos dígitos. Por exemplo, 30310-030 e 30310030 são CEPs válidos. 303100308 e AB897453 não são.

Para consultar um CEP, você deve utilizar a API CEP lá. A página contém instruções sobre como utilizar a API.

O service deve fornecer uma interface para consultar CEPs. Primeiramente, o service deve chamar o modelo para consultar o banco de dados pelo CEP procurado. Se o CEP for encontrado, seus dados são retornados sem consultar a API. Caso contrário, o service deve fazer uma requisição a API. O service então deverá enviar os dados para o modelo, para que ele possa salvar no MongoDB os dados da primeira API que responder com sucesso. Em outras palavras, o banco de dados funcionará como um cache de CEPs, enquanto a API só será consultada se um CEP não for encontrado localmente. Inicialmente, o banco deve estar vazio.

O banco de dados só precisa armazenar as seguintes informações: CEP , UF , cidade , bairro e logradouro . Um CEP salvo no banco deve conter somente números, sem hífens, e essa chave deve ser única para evitar que o mesmo CEP seja cadastrado duas vezes e otimizar a busca.
O CEP deve ser passado através da rota do endpoint da aplicação como uma query , da seguinte forma:

```
http :3000/lookup?cep=303100308
```

Se o CEP for válido, seus dados devem ser retornados em um JSON . Se o CEP não for encontrado, deve ser retornado um JSON com o campo mensagem com o texto CEP não encontrado . Se for digitado um CEP com formato inválido, deve ser retornado um JSON com o campo mensagem com o texto mensagem CEP inválido .

Não se esqueça de enviar também o status da requisição de acordo com a situação.

Note que o CEP pode ser digitado no input com ou sem hífen, mas deve ser salvo no banco sem hífens.

Lembre-se de organizar sua aplicação seguindo a arquitetura MSC, separando as responsabilidades em camadas.

**Exercício 2**: Vamos incrementar a API cep-lookup com algumas estatísticas. Vamos armazenar informações sobre quantidade de consultas a CEPs, agrupando por estado e cidade. Por exemplo, se houve duas consultas a CEPs de Florianópolis e uma de Joinville, teremos nos banco estas informações:

```json
{
  "uf": "SC",
  "quantidade": 3
}
{
  "cidade": "Florianópolis",
  "quantidade": 2
}
{
  "uf": "Joinville",
  "quantidade": 1
}
```

Sempre que um CEP for consultado, os documentos relacionados a sua cidade e a seu estado devem ser atualizados, incrementando o contador.
Adicione à API um endpoint que permita consultar estatísticas por cidade e ou estado. Armazene os documentos sobre estatísticas em coleções diferentes no banco. Crie um modelo que forneça uma interface para ler e atualizar essas estatísticas.

As consultas devem ser feitas da seguinte forma:

# Consulta por estado:

```
http :3000/statistic?uf=MG
```

# Consulta por cidade:

```
http :3000/statistic?cidade=Belo Horizonte
```

Em uma requisição de consulta de CEP, será necessário ler ou salvar o CEP no banco e atualizar as estatísticas. Mantenha os modelos com responsabilidades separadas, ou seja, não coloque lógica de estatística no modelo de CEP ou vice-versa. Crie um serviço que acessará ambos os modelos para realizar as operações necessárias e chame esse serviço no controller.
