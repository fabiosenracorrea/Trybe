# Exercise 2

Nesse exercício você vai construir uma aplicação de News Feed. Ela funcionará da seguinte forma:

1. Ao abrir a página, uma requisição deve ser feita para a news API.

2. Na parte superior da tela, deve haver um input em que seja possível filtrar o assunto das notícias. Quando uma nova requisição for feita, deve ser utilizado o texto presente no input. Caso o input esteja em branco, a requisição deve ser feita sem filtro.

3. A API possui dois endpoints: top headlines e everything. Adicione, ao lado do input onde se pode filtrar as notícias por assunto, dois radio buttons, um para cada endpoint. Uma das opções já deve vir selecionada por default. A requisição deve ser feita para o endpoint relacionado ao input selecionado. Deve haver um texto na tela indicando de qual endpoint são as notícas exibidas.

4. Em intervalos regulares de tempo, a página deve se atualizar sozinha. Enquanto uma nova requisição estiver sendo feita, a página deve exibir algum indicativo de que será atualizada, mas as notícias anteriores não devem desaparecer.

5. Deve haver um botão na página para interromper o feed de notícias. Quando clicado, as notícias devem desaparecer, e as requisições para API, cessar. Ao clicar de novo no botão, as atualizações devem reiniciar.

6. Cada notícia deve exibir seu título, autor, descrição, fonte, data de publicação, URL da notícia original e a imagem da notícia.

7. Use Hooks e Context API para construir o seu News Feed. Ou seja, não utilize componentes de classe. Utilize os Hooks do React que você tem aprendeu nos últimos dias para gerenciar e compartilhar estado, fazer requisições, manipular o DOM manualmente etc.

8. A API requer um token para ser utilizada. Você precisará se cadastrar para obter um token. O cadastro é gratuito. Leia a documentação para entender como utilizar seu token para se autenticar na API.
