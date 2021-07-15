## Project 01 - Data Structures II - Stacks, Queues

The first project of Trybe's 39th module, in which we continue to dive in a little on **Data Structures**

### What was proposed here

As a literal copy/paste of the instructions:

---

Para executar os testes, lembre-se de primeiro **criar e ativar o ambiente virtual**, além de também instalar as dependências do projeto. Isso pode ser feito através dos comandos:

```bash
$ python3 -m venv .venv

$ source .venv/bin/activate

$ python3 -m pip install -r dev-requirements.txt
```

O arquivo `requirements.txt` contém todos as dependências que serão utilizadas no projeto, ele está agindo como se fosse um `package.json` de um projeto `Node.js`.

---

## Testes

Com as dependências já instaladas, para executar os testes basta usar o comando:

```bash
$ python3 -m pytest
```

Se quiser saber mais sobre a instalação de dependências com `pip`, veja esse artigo: https://medium.com/python-pandemonium/better-python-dependency-and-package-management-b5d8ea29dff1

Para verificar se você está seguindo o guia de estilo do Python corretamente, execute o comando:

```bash
$ python3 -m flake8
```

---

## Requisitos obrigatórios:

### Pacote `ting_file_management`

#### 1 - Implemente uma fila para armazenar os arquivos que serão lidos.

Preencha a classe `Queue`, presente no arquivo `queue.py` utilizando as estruturas vistas no módulo.

A fila (Queue) deve ser uma estrutura `FIFO`, ou seja, o primeiro item a entrar, deve ser o primeiro a sair. Utilize seus conhecimentos de estruturas de dados para otimizar as operações implementadas.

Devemos implementar os métodos de inserção (`enqueue`), remoção (`dequeue`) e busca (`search`).

Vamos expor o tamanho da nossa fila através do método `__len__`.

Na busca, caso um índice inválido seja passado, uma exceção do tipo `IndexError` deve ser lançada.

##### As seguintes verificações serão feitas:

- 1.1 - Será validado que o método `enqueue` deve adicionar um valor a fila, modificando seu tamanho.

- 1.2 - Será validado que o método `dequeue` deve remover o elemento a mais tempo na fila, modificando seu tamanho.

- 1.3 - Será validado que o método `search` deve buscar um valor na lista à partir de um índice.

- 1.4 - Será validado que o método `search` deve lançar uma exceção quando o índice for inválido.

#### 2 - Implemente uma função `txt_importer` dentro do módulo `file_management` capaz de importar notícias a partir de um arquivo TXT, utilizando "\n" como separador. Todas as mensagens de erro devem ir para a `stderr`.

**Exemplo simples de um arquivo txt a ser importado:**

```md
Acima de tudo,
é fundamental ressaltar que a adoção de políticas descentralizadoras nos obriga
à análise do levantamento das variáveis envolvidas.
```

- Caso o arquivo TXT não exista, deve ser exibida a mensagem: "Arquivo {path_file} não encontrado";

- Caso a extensão do arquivo seja diferente de .txt, deve ser exibida uma mensagem: "Formato inválido";

- A função deve retornar uma estrutura contendo as linhas do arquivo.

##### As seguintes verificações serão feitas:

- 2.1 - Será validado que ao executar o método `txt_importer` deve retornar uma estrutura contendo as linhas do arquivo;

- 2.2 - Será validado que ao executar o método `txt_importer` com um arquivo TXT que não exista, deve ser exibida a mensagem: `Arquivo {path_file} não encontrado`;

- 2.3 - Será validado que ao executar o método `txt_importer` com uma extensão diferente de `.txt`, deve ser exibida uma mensagem: `Formato inválido`.

#### 3 - Implemente uma função `process` dentro do módulo `file_process` capaz de ler o arquivo carregado na função anterior e efetuar o preprocessamento do conteúdo.

**Exemplo de retorno**:

```python
{
    "nome_do_arquivo": "arquivo_teste.txt", # Nome do arquivo recém adicionado
    "qtd_linhas": 3,                        # Quantidade de linhas existentes no arquivo
    "linhas_do_arquivo": [...]              # linhas retornadas pela função do requisito 2
}
```

 - A função irá receber como parâmetro a fila que implementamos no requisito 1 e o caminho do arquivo.

- Por padrão deve-se ignorar arquivos com o mesmo nome;

- Não deve haver limites de linhas a serem analisadas;

- O exemplo de saída acima deve ser emitido após cada nova inserção válida, via `stdout`;

- O conteúdo processado deve ser adicionado a uma fila.

##### As seguintes verificações serão feitas:

- 3.1 - Será validado que ao executar a função `process` com o mesmo nome a execução deverá ser ignorada;

- 3.2 - Será validado que ao executar a função `process` com sucesso deverá retornar mensagem via `stdout`.

#### 4 - Implemente uma função `remove` dentro do módulo `file_process` capaz de remover o primeiro arquivo processado

 - A função irá receber como parâmetro a fila que implementamos no requisito 1.

- Por padrão deve-se ignorar a operação caso não hajam arquivos e emitir a mensagem `Não há elementos`;

- Em caso de sucesso de remoção, deve ser emitido a mensagem: "`Arquivo {path_file} removido com sucesso`".

##### As seguintes verificações serão feitas:

- 4.1 - Será validado que ao executar a função `remove` com sucesso deverá retornar mensagem via `stdout`.

- 4.2 - Será validado que ao executar a função `remove` um arquivo inexistente deverá retornar a mensagem `Não há elementos`.

#### 5 - Implemente uma função `file_metadata` dentro do módulo `file_process` capaz de apresentar as informações superficiais dos arquivos processados.

- Baseado na posição informada, deve ser apresentado as informações relacionadas ao arquivo, parecido com o apresentado abaixo;

- Em caso da posição não existir, deve ser exibida uma mensagem de erro: "`Posição inválida`" na `stderr`.

 - A função irá receber como parâmetro a fila que implementamos no requisito 1 e o índice a ser buscado.

**Exemplo de retorno**:

```python
{
    "nome_do_arquivo": "arquivo_teste.txt",
    "qtd_linhas": 3,
    "linhas_do_arquivo": [...]
}
```

##### As seguintes verificações serão feitas:

- 5.1 - Será validado que ao executar a função `file_metadata` com sucesso deverá retornar mensagem via `stdout`.

- 5.2 - Será validado que ao executar a função `file_metadata` com posição inválida deverá retornar a mensagem `Posição inválida`.

### Pacote `ting_word_searches`

#### 6 - Implemente uma função `exists_word` dentro do módulo `word_search`, que valide a existência da palavra em todos os arquivos processados. Para cada palavra encontrada, deve-se listar sua linha conforme apresentação abaixo.

- A busca deve ser _case insensitive_ e deve retornar uma lista no formato:

```json
[{
  "palavra": "de",
  "arquivo": "arquivo_teste.txt",
  "ocorrencias": [
    {
      "linha": 1
    },
    {
      "linha": 2
    }
  ]
}]
```

- Caso a palavra não seja encontrada em nenhum arquivo, deve-se retornar uma lista vazia.

##### As seguintes verificações serão feitas:

- 6.1 - Será validado que ao executar a função `exists_word` com sucesso deverá retornar a mensagem.

- 6.2 - Será validado que ao executar a função `exists_word` com palavra inexistente deverá retornar uma lista vazia.

#### 7 - Implemente uma função `search_by_word` dentro do módulo `word_search`, que busque a palavra em todos os arquivos processados. Para cada palavra encontrada, deve-se listar sua linha, o conteúdo e o arquivo da ocorrência.

- A busca deve ser _case insensitive_ e deve retornar uma lista no formato:

```json
[{
  "palavra": "de",
  "arquivo": "arquivo_teste.txt",
  "ocorrencias": [
    {
      "linha": 1,
      "conteudo": "Acima de tudo,"
    },
    {
      "linha": 2,
      "conteudo": "é fundamental ressaltar que a adoção de políticas descentralizadoras nos obriga"
    }
  ]
}]
```

- Caso a palavra não seja encontrada em nenhum arquivo, deve-se retornar uma lista vazia.

##### As seguintes verificações serão feitas:

- 7.1 - Será validado que ao executar a função `search_by_word` com sucesso deverá retornar a mensagem.

- 7.2 - Será validado que ao executar a função `search_by_word` com palavra inexistente deverá retornar uma lista vazia.

---


### Grade

This project got a **100%/100%** grade and can be checkout entirely on [here](https://github.com/tryber/sd-06-project-ting/pull/10).

#### Comments

Understanding Queues and Stacks is necessary if you want to grasp what happens under the hood on many database queries, http requests and even, function calls. It's a notion one should have overtime, as sometimes errors can occur exactly there (hello stack overflow!). Moreover, it's possible some custom implementation using those structures might need to done from scratch, so it's good to know what they are all about.

###### Feedback

As always, any feedback or suggestion is welcomed.
