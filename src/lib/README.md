# Estudo de testes

## Primeiro teste criado Mao na massa!

### Basico

- Feito a instalacao do jest `pnpm i jest @types/jest -D`
- Os arquivos de testes sao buscados atraves de expressoes regulares
- Foi instalado o Snippets do Jest no vscode para facilitar nas implementacoes
- Foi criado o arquivo `calculator.spec.js` para criacao do testes
- No jest a funcao usada para criacao de testes pode ser a `it()` ou a `test()`
- Na funcao de testes e criado a descricao do testes e o metodo onde implementamos a funcao, que resultarar na expectitiva da descricao, chamamos isso de `ASSERTION`
  o que determina o que o metodo retorna seja oque eu esteja esperando e usado o metodo `expect().toBe()`
- E criado o metodo `sum()` em um arquivo `calculator.js` e integrado no arquivo `spec.js`
- Para evitar falsos positivos podemos usar a negacao, o jest tem disponivel na funcao do `expect().not.toBe()` para fazer essa negacao.
- Criacao de watch para observar arquivos de testes, `--watchAll`, quando ha alguma alteracao nos arquivos do projeto!
- O watch possui filtros e funcoes
- Foi colocado no package.json um scritp `test:watch: jest --watchAll` para rodar o test com watch

- Foi criado um test utilizando o `expect(()=> { method }).toThrowError()` para capturar o error gerado, no arquivo do metodo foi criado um `throw new Error('String')`
- Storias relacionadas mantemos no mesmo teste para organizacao

### Um pouco mais complexo

- Criacao de testes mais complexos, foi criado os arquivos `queryString.js` e `queryString.spec.js`
- No arquivo `.spec` usamos o metodo de test `describe('group', () => {})` metodo usado para criacao de grupo de casos de testes no mesmo switch

- Implementacao do metodo queryString, foi usado o filtro do watch para testar apenas o switch atual de testes filtro `p` pattern

- Refatorando com confiança, os testes nos trazem o beneficio de mexer no codigo novamente sem medo, sem que aquilo fique quebrado
- Foi refatorado o arquivo `queryString.js`

- Metodo coverage, para verificar a cobertura dos testes no projeto `pnpm test --coverage || pnpm jest --coverage ` Statemants, Branch (Expressoes condicionais), Funcoes e linhas

- Feito a criacao de arquivo `Cart.js` e `Cart.spec.js` para praticar o TDD de forma mais complexa
- Foi criado o `beforeEach(() => {})` funcao que e executada antes dos testes

- Foi add a biblioteca `lodash.js` para utilizar dos metodos de add e remover itens do carrinho

- Foi criado um `describe('getTotal()')` dentro do `describe('Cart')` para separar os testes especificos de getTotal()
- Foi utilizado o metodo `toMatchInlineSnapshot()` para criação de expect object(output), o Snapshot cria uma string, foi feito tambem a modificação dos parametros do produto, o `toMatchInlineSnapshot()` mostra error e a modificacao que foi feita, para atualizar ussamos o parametro `U` funcao update do `--watchAll`
- Foi mostrado uma alternativa para arquivos grandes do snapshot `toMatchSnapshot()` só que esse e criado uma pasta `_snapshots` com o arquivo exportando o expect object(output)
- Foi criado um metodo novo chamado `summary()`
- Foi utlizado o metodo `expect().toBeGreaterThan()` para verificao condicional
- Foi add a biblioteca `dinero.js` para utilizar metodos para tratar com valores de dinheiro

- Usado o metodo `fit()` do jest para rodar apenas o `f + it()` em questao

- instalado o ndb node.js para debugar,

## Porque testar ?

### "É impensavel desenvolver profissionalmente sem incluir testes" - vedovelli

- Confiança ao refatorar
- Confianca ao incluir novas funcionalidades
  - Ideal e comecar utilizando o TDD, comecar com testes
- Confianca ao atualizar dependencias, no javascript as dependencias ficam obsoletas muito rapidas
- Facilita a compreensao da implementacao
- Funciona como documentacao das funcionalidades

## O que testar?

### "Tudo o que fizer sentido testar!" é um felling do que precisa ser testado

- Se possue a possibilidade de quebrar algo, é algo testavel
- Se e documentavel, é testavel
- Devo deixar um comentario? entao isso e testavel! Escrevo um teste no lugar!

## Piramide de testes

### Os tipos mais comuns de testes

- Unit tests (metodos por metodos)
  - Metodo sem dependencias
  - Metodo que fazem uma unica coisa
- Integration Tests
  - Metodos que interligam outros metodos (Unit tests por exemplo)
- End to End(E2E) Tests
  - Metodos de simulacao
  - Usado em UI (tests GUI)
  - Testa acao do usuario

## Ferramentas para testes FRONTEND

- Jest
  - Test runner
  - Localiza os arquivos e executa os testes
  - Permite fazer mock e observar(watch de metodos e parametros) metodos em bibliotecas
  - Permite fazer as assertions, tais como `expect().toBe()`
- Cypress
  - Framework de testes End to End
  - Executa a aplicacao no browser, como se fosse o usuario
  - Permite executar no Chrome, Firefox, Edge e Eletron
  - Uma ferramenta completa, nao precisa ser usada com Jest

## Bibliotecas Para auxiliar as ferramentas FRONTEND

- Testing Library
  - Biblioteca
  - Prove utilitarios para montar componentes(React, Vue, Svelte...)
  - Oferece ferramentas para interagir com componentes como se fosse o usuario
  - Trabalha em conjunto com Jest
  - Faz o mesmo papel Enzyme e Vue-test-utils
- Enzyme
  - Biblioteca
  - Prove utilitarios para montar componentes React
  - Oferece ferramentas para interagir com componentes como se fosse o usuario
  - Permite manejar state e testar detalhes de implmentacao \*
  - Trabalha em conjunto com Jest
  - Faz o mesmo papel Testing Library e Vue-test-utils
- Vue Test Utils
  - Biblioteca
  - Prove utilitarios para montar componentes Vuejs
  - Oferece ferramentas para interagir com componentes como se fosse o usuario
  - Permite manejar state e testar detalhes de implmentacao \*
  - Trabalha em conjunto com Jest
  - Faz o mesmo papel Testing Library e Enzyme

## CI/CD

### O PAPEL DOS TESTES NO DEPLOY MODERNO

- Os testes sao integrados ao processo Continuous Integration / Continuous Delivery e sao
  fundamentais para que estes existam
  - Github Actions
  - CircleCI

## TDD

### Test Driven Development

- Write a failing test -> Make the test pass -> Refactor

- Melhora a implementacao (a melhor maneira de fazer a cada ciclo)
- Facilita implementacoes mais simples
- Facilita a escrita dos testes
- A oportunidade de tomar nota na hora q esta fazendo a implementacao
- Detalhes implementacao frescos na mente, cobrir todas as situacoes TDD ajuda nessa progrecao
- Menor tempo dedicado a bug fixing, os testes sao preventivos
- Curva de aprendizado
- Maior tempo de desenvolvimento
- Dificil de vender ao time de produtos
