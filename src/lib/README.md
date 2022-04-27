# Estudo de testes

## Primeiro teste criado

- Feito a instalacao do jest `pnpm i jest @types/jest -D`
- Os arquivos de testes sao buscados atraves de expressoes regulares
- Foi instalado o Snippets do Jest no vscode para facilitar nas implementacoes
- Foi criado o arquivo `calculator.spec.js` para criacao do testes
- No jest a funcao usada para criacao de testes pode ser a `it()` ou a `test()`
- Na funcao de testes e criado a descricao do testes e o metodo onde implementamos a funcao que resultarar na expectitiva da descricao e chamado de `ASSERTION`
  determina o que o metodo retorna seja oque eu esteja esperando e usado o metodo `expect().toBe()`
- E criado o metodo sum em um arquivo `calculator.js` e integrado no arquivo `spec.js`
- Para evitar falsos positivos podemos usar a negacao, o jest tem disponivel na funcao do `expect().not.toBe()` para fazer essa negacao.
- Criacao de watch para observar arquivos de testes, `--watchAll`, quando ha alguma alteracao nos arquivos do projeto!
- O watch possui filtros de testes
- Foi colocado no package.json um scritp `test:watch: jest --watchAll` para rodar o test com watch

- Foi criado um test utilizando o `expect(()=> { method }).toThrowError()` para capturar o error gerado, no arquivo do metodo foi criado um `throw new Error('String')`
- Coisas relacionadas mantemos no mesmo teste

- Criacao de testes mais complexos, foi criado os arquivos `queryString.js` e `queryString.spec.js`
- No arquivo `.spec` usamos o metodo de test `describe('group', () => {})` metodo usado para criacao de grupo de casos de testes no mesmo swtich

- Implementacao do metodo queryString, foi usado o filtro do watch para testar apenas o switch atual de testes filtro `p` pattern

- Refatorando com confiança, os testes nos trazem o beneficio de mexer no codigo novamente sem medo, sem que aquilo fique quebrado
- Foi refatorado o arquivo `queryString.js`

- Metodo coverage, para verificar a cobertura dos testes no projeto `pnpm test --coverage || pnpm jest --coverage ` Statemants, Branch (Expressoes condicionais), Funcoes e linhas

- Feito a criacao de arquivo `Cart.js` e `Cart.spec.js` para praticar o TDD de forma mais complexa
- Foi criado o `beforeEach(() => {})` funcao que e executada antes dos testes

- Foi add a biblioteca `lodash.js` para utilizar dos metodos de add e remover itens do carrinho

- Foi criado um `describe('getTotal()')` dentro do `describe('Cart')` para separar os testes especificos de getTotal()
- Foi utilizado o metodo `toMatchInlineSnapshot()` para criação de expect object(output), o Snapshot cria uma string, foi feito tambem a modificação dos parametros do produto, o `toMatchInlineSnapshot()` mostra error e a modificacao que foi feita, para atualizar ussamos o parametro `U` update do `--watchAll`
- Foi mostrado uma alternativa para arquivos grandes do snapshot `toMatchSnapshot()` só que esse e criado uma pasta `_snapshots` com o arquivo exportando o expect object(output)
- Foi criado um metodo novo chamado summary()
- Foi utlizado o metodo `expect().toBeGreaterThan()` para verificar codincao maior que!
- Foi add a biblioteca dinero.js para utilizar metodos para tratar com valores de dinheiro

- Usado o metodo `fit()` do jest para rodar apenas o `f + it()` em questao

- instalado o ndb node.js para debugar,
