<div align="center">
     <img src="https://github.com/yagopeixinho/readmeTemplate/blob/main/assets/images/readmeTemplateIcon.png?raw=true" width="300px">
</div>

<h4 align="center">Faça questão de um tostão!</h4>

<p align="center">
    <img src="https://img.shields.io/github/last-commit/yagopeixinho/veiacoPlataforma?color=58ADE2">
    <img src="https://img.shields.io/github/languages/count/yagopeixinho/veiacoPlataforma?color=E390D2">
    <img src="https://img.shields.io/github/license/yagopeixinho/veiacoPlataforma?color=fecf10">
</p>

<p align="center">
  <a href="#sobre">Sobre</a> • 
  <a href="#notas-importantes">Notas importantes</a> •
  <a href="#gallery">Gallery</a> •
  <a href="#instalação">Instalação</a> •
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
- 


### 📦 Clonando o repositório

```bash
$ git clone git@github.com:yagopeixinho/veiacoPlataforma.git
```

### 🔨 Rodando o projeto

```bash
# Acesse o repositório pelo terminal.
$ cd veiacoPlataforma

# Instale as dependências.
$ npm install

# Rode o projeto
$ npm start
```

### :gear: Configurações iniciais
Precisamos declarar alguns configurações para que o projeto rode sem nenhum problema.

#### Variáveis de ambiente

Para iniciarmos o projeto precisamos declarar algumas variáveis de ambiente responsáveis pela definição informações importantes, como a URL da API. [Clique aqui]() para mais informações sobre o *back-end*.

```bash
# No diretório do projeto crie o arquivo responsável pela definição das variáveis de ambiente.
$ touch .env
```

Dentro do arquivo `.env` cole as variáveis de ambiente mínimas para rodar o projeto

```bash
# URL da API.
REACT_APP_API_URL="http://localhost:5000/api/"
```

#### Sass
Nesse projeto foi utilizado o [7-1 Sass Architecture](https://www.learnhowtoprogram.com/user-interfaces/building-layouts-preprocessors/7-1-sass-architecture) do Sass.

```bash
# Dentro do diretório do projeto rode o comando para que seja possível modificações no CSS
$ watch sass ./src/assets/sass/main.scss ./src/assets/sass/main.css
```

## Contato

- 📬 Me envie um e-mail: peixinhoyago@gmail.com
- Se você tem alguma dúvida ou quer entrar em contato comigo por qualquer outro motivo, você pode encontrar minhas redes sociais e mais informação sobre mim [clicando aqui](https://github.com/yagopeixinho/yagopeixinho/blob/master/README.md)

## Licensa
Esse projeto está com a licença: MIT License. [Clique aqui para mais detalhes](https://github.com/yagopeixinho/veiacoPlataforma/blob/master/LICENSE)
