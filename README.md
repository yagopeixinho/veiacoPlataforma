<div align="center">
     <img src="https://github.com/yagopeixinho/readmeTemplate/blob/main/assets/images/readmeTemplateIcon.png?raw=true" width="300px">
</div>

<h4 align="center">Faça questão de um tostão!</h4>

<p align="center">
    <img src="https://img.shields.io/github/last-commit/yagopeixinho/veiacoPlataforma?color=008ebd">
    <img src="https://img.shields.io/github/languages/count/yagopeixinho/veiacoPlataforma?color=ff69b4">
    <img src="https://img.shields.io/github/license/yagopeixinho/veiacoPlataforma?color=fecf10">
</p>

<p align="center">
  <a href="#sobre">Sobre</a> • 
  <a href="#notas-importantes">Notas importantes</a> •
  <a href="#gallery">Gallery</a> •
  <a href="#getting-started">Getting started</a> •
  <a href="#contribuindo">Contribuindo</a> •
  <a href="#contato">Contato</a> •
  <a href="#licensa">Licensa</a>
</p>

<img src="https://github.com/yagopeixinho/readmeTemplate/blob/main/assets/images/sampleImage2.png?raw=true" width="100%">

<br>

## Sobre
O Veiaco nasceu a partir de uma necessidade pessoal (e uma memória ruim) para gerenciamento de dívidas de pessoas (especialmente amigos). Com o Veiaco você pode acrescentar dívidas a um veiaco, gerenciar essas dívidas e ainda ter uma inteligência através de *dashboards* e gráficos para te ajudar no gerenciamento das informações.

## Notas importantes

- Os dados não estão criptografados durante a transferência de informação. Tenha cuidado ao inserir dados sensíveis.

- Alguns *feedbacks* da tela não estão funcionando nesse *release*. Alguns exemplos:
     - Dados de autenticação inseridos de forma incorreta
     - Transferências de telas que deveriam ocorrer de forma natural ainda não foram inseridos
     
- Aguns elementos estão estáticos e não possuem nenhuma funcionalidade, como elementos em HTML (o botão de esqueceu a senha)

- O visual não está concluído. Além das cores, transições de telas e redirecionamentos precisam ser melhorados

- A **logo** não foi definida, portanto, não foi incluída nessa *release*

- As funcionalidades que dependem do *back-end* ou estão estáticos ou estão incoerentes (valores aleatórios ou não estão funcionando corretamente)

## Gallery

<div align="center">

### Lorem ipsum dolor sit amet, consectetur adipiscing elit.

<img src="https://github.com/yagopeixinho/readmeTemplate/blob/main/assets/images/sampleImage2.png?raw=true">

<br>

### Lorem ipsum dolor sit amet, consectetur adipiscing elit.

<img src="https://github.com/yagopeixinho/readmeTemplate/blob/main/assets/images/sampleImage2.png?raw=true">

</div>

<br>

## Instalação


### Pré-requisitos
> **Note**
> Esse projeto possui um *back-end* API. [Clique aqui]() para mais informações sobre o *back-end*. 
 
Antes de rodar o front-end projeto, é necessário ter instalado em sua máquina:
- Git


### 📦 Clonando o repositório

```bash
$ git clone git@github.com:yagopeixinho/veiacoPlataforma.git
```

### 🔨 Configurações iniciais

```bash
# Acesse o reposiório pelo terminal.
$ cd veiacoBackend
# Instale as dependências.
$ npm install
```

### 🏷 Variáveis de ambiente

Para iniciarmos o projeto precisamos declarar algumas variáveis de ambiente responsáveis pela definição de algumas informações importante, como a URL do banco de dados e porta em que a aplicação rodará.

```bash
# No diretório do projeto crie o arquivo responsável pela definição das variáveis de ambiente.
$ touch .env
```

Dentro do arquivo `.env` cole as variáveis de ambiente mínimas para rodar o projeto

```bash
# Essa é a porta em que o projeto rodará.
PORT="3333"
# Esse é o URL do banco de dados que será conectado. Lembre-se de alterar os parâmetros USER, PASSWORD, HOST:PORT e DATABASE futuramente quando configurarmos a conexão com o banco de dados.
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

## Contato

- 📬 Me envie um e-mail: peixinhoyago@gmail.com
- Se você tem alguma dúvida ou quer entrar em contato comigo por qualquer outro motivo, você pode encontrar minhas redes sociais e mais informação sobre mim [clicando aqui](https://github.com/yagopeixinho/yagopeixinho/blob/master/README.md)

## Licensa
Esse projeto está com a licença: MIT License. [Clique aqui para mais detalhes](https://github.com/yagopeixinho/veiacoPlataforma/blob/master/LICENSE)
