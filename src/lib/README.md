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
