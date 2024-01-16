# #5 - React: **<https://dtmoney-aszurar.netlify.app//>**

<div align="center">
    <img src="" width="1000">
</div>

## dtmoney

- O projeto dtmoney é uma plataforma que cadastra transações, calcular o saldo, total de entradas e saídas, lista as transações e indica o período de tempo em que elas ocorreram.
- O site foi publicado com CI/CD por meio da plataforma **[Netlify](https://www.netlify.com/)**.
- Acesse e teste o projeto em: **<https://dtmoney-aszurar.netlify.app//>**

  <div align="center">
    <h3><a href="https://dtmoney-aszurar.netlify.app//">dtmoney</a></h3>
  </div>

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/3b9ff421-260b-4411-966e-183baa6e739d/deploy-status)](https://app.netlify.com/sites/todo-aszurar/deploys) [![React](https://img.shields.io/badge/-React-%2320232a.svg?style=flat&logo=react&link=https://react.dev)](https://react.dev/)[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white&link=https://tailwindcss.com/)](https://tailwindcss.com/) [![TypeScript](https://img.shields.io/badge/-TypeScript-%23007ACC?style=?style=flat-square&logo=typescript&logoColor=white&link=https://www.typescriptlang.org/)](https://www.typescriptlang.org/) [![JavaScript](https://img.shields.io/badge/-JavaScript-%23323330.svg?style=flat&logo=javascript&link=https://www.javascript.com/)](https://www.javascript.com/) [![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white&link=https://developer.mozilla.org/pt-BR/docs/Web/HTML)](https://developer.mozilla.org/pt-BR/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&link=https://www.w3schools.com/css/)](https://www.w3schools.com/css/) [![Yarn](https://img.shields.io/badge/-yarn-%232C8EBB?style=flat&logo=yarn&logoColor=white&link=https://yarnpkg.com/)](https://yarnpkg.com/)

</div>

<div align="center">
        <h2>
          <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
          <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
          <a href="#art-design">Design</a>&nbsp;|&nbsp;
          <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
          <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
          <a
          href="#truck-entrega-e-distribuição-continua">CI/CD</a>&nbsp;|&nbsp;
          <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>&nbsp;
        </h2>
</div>

---

<div align="center">
    <img src="" width="1000">
</div>

<div align="center" >

**[Link do vídeo completo sobre o projeto](https://www.youtube.com/watch?v=JYvJrERvdV4)**

</div>

---

## :information_source: Sobre

- O projeto **dtomeny** pode ser um projeto simples, mas que foi abordado conceitos importantes para o desenvolvimento de web apps com React.
- Esse projeto foi reformulado e refeito com tecnologias atuais a partir de um projeto do módulo da trilha de 2021 de React da Rocketseat. Assim, temos algumas adições e incrementos como a criação do **tema escuro**, Remoção de transações, gerenciamento de Estados pelo useReducer, dentre outros.
- Usamos **[React](https://react.dev)** com **[TypeScript](https://www.typescriptlang.org/)** como principais tecnologias.
- A animação da listagem é feita com a lib **[AutoAnimate](https://auto-animate.formkit.com/)**.
- A acessibilidade foi levada em consideração, com o uso da lib **[axe-core](https://www.npmjs.com/package/@axe-core/react)** para testes e correções de acessibilidade assim como leitor de tela ChromeVox e o uso do **[Radix UI](https://www.radix-ui.com/)** para componentes acessíveis como Modais e Tooltips.

- O projeto dtmoney é o 2º projeto realizado em aula do bootcamp Ignite da trilha ReactJS da Rocketseat.
  - Esse projeto na época construído, foi feito com create react app e Styled Componentes.
  - Agora foi refeito com Vite e TailwindCSS.
  
- **Tela inicial**

<div align="center" >
      <img src="" width="1000">
      <img src="" width="1000">
</div>

---

## :interrobang: Motivo

- Esse projeto tem o objetivo de praticar o uso do **React com Tailwindcss, TypeScript e axios** para a construção de uma aplicação web. 

### Funcionalidades novas em relação ao projeto original

  1. Remoção de transações;
  2. Cadastro da data de Entrada e Saída com **React DayPicker**;
  3. Indicação da última data de Entrada e Saída;
  4. Indicação do período de tempo em que as transações ocorreram;
  5. Formatação de valores com **CurrencyFormat**, **Intl** e **Date FNS**;
  6. **Troca de temas** com **tailwindcss** respeitando o tema escolho no sistema operacional do usuário;
  7. Apesar do projeto original ser disponibilizado no Figma, ele não está no padrão de design ensinado pela própria Rocketseat por ser um pouco antigo, então:
     1. Reconstrução do protótipo no Figma aplicando o padrão de design ensinado pela Rocketseat;
     2. Construção do protótipo com tema escuro
  8. **Animação** na listagem de tarefas com **AutoAnimate**;
  9. **Componentes acessíveis** com **Radix UI** e integração com **tailwindcss** como ToolTip e Modal;
  10. **Uso do useReducer** e **Context API** do React para o gerenciamento de estado da aplicação em conjunto com a divisão da lógica de **actions** e **reducers** para o gerenciamento de estado;
  11. Entender e praticar construção de interfaces com **tailwindcss** aplicando responsividade, breakpoints e variações de componentes com **tailwindcss-variants** e **tailwindcss**;
  12. **Acessibilidade** com **axe-core** e **ChromeVox**;
  13. **Publicação** com **CI/CD** por meio da plataforma **Netlify**.

### O que foi aprendido de novo?

  1. **Integração com Api** com **axios**;
  2. Input de valor monetário personalizado com **CurrencyFormat**;
  3. Input de data personalizado com **React DayPicker**;
  4. Formatação de datas e valores monetários com **Date FNS** e **Intl**;
  5. Uso do método **reducer** para calcular o total de entradas, saídas e o saldo;
  6. Maior **aprofundamento na responsividade** com tailwindcss;
  7. **Contexto de responsividade** para modificações mais profundas no visual responsivo;
  8. Maior **aprofundamento no uso do useReducer** para o gerenciamento de estado da aplicação;
  
- **Modal de Registro de Transações**

  <div align="center" >
      <img src="https://i.imgur.com/fMEwxCz.png" width="1000" alt="Formulário no tema light"><img src="https://i.imgur.com/SiwGjx4.png" width="1000" alt="Formulário preenchido no tema light">
      <img src="https://i.imgur.com/F32IPzF.png" width="1000"  alt="Formulário no tema dark"><img src="https://i.imgur.com/XxtVgkC.png" width="1000" alt="Formulário preenchido no tema dark">
  </div>

---

## :art: Design

- Apesar do projeto original ser disponibilizado no Figma, ele não está no padrão de design ensinado pela própria Rocketseat por ser um pouco antigo, então:
  - Reconstrução do protótipo no Figma aplicando o padrão de design ensinado pela Rocketseat;
  - Construção do protótipo com tema escuro

<div align="center">
  <h3><a href="https://www.figma.com/file/7LmOydy7HWvNRbmTr1Tkkf/dtmoney-Ignite?type=design&node-id=0-1&mode=design&t=1SGukE0ct1Da1lzu-0">dtmoney</a></h3>

  [![Design](https://i.imgur.com/KtwG6Zs.png)](https://www.figma.com/file/7LmOydy7HWvNRbmTr1Tkkf/dtmoney-Ignite?type=design&node-id=0-1&mode=design&t=1SGukE0ct1Da1lzu-0)
</div>

---

## :seedling: Requisitos Mínimos

  1. NodeJS
  2. ReactJS
  3. Vite
  4. Yarn(ou NPM)
  
- **Responsividade**

<div align="center" >
      <img src="https://i.imgur.com/a9jCeRM.png" alt="Tela inicial no modo responsivo e tema light" width="280">_<img src="https://i.imgur.com/1PYAfbo.png" width="280" alt="Formulário no tema light em modo responsivo">
      <img src="https://i.imgur.com/I4oLSJg.png" alt="Tela inicial no modo responsivo e tema dark" width="280">_<img src="https://i.imgur.com/1gV9SgG.png" width="280" alt="Formulário no tema dark em modo responsivo">
</div>

---

## :rocket: Tecnologias Utilizadas

- O projeto foi desenvolvido utilizando as seguintes tecnologias:

  1. **[axe-core/react](https://www.npmjs.com/package/@axe-core/react)**
  2. **[axios](https://axios-http.com/)**
  3. **[AutoAnimate](https://auto-animate.formkit.com/)**
  4. **[autoprefixer](https://www.npmjs.com/package/autoprefixer)**
  5. **[CurrencyFormat](https://github.com/mohitgupta8888/react-currency-format)**
  6. **[Date FNS](https://date-fns.org/)**
  7. **[DayPicker](https://react-day-picker.js.org/)**
  8. **[JavaScript](https://developer.mozilla.org/pt1.BR/docs/Web/JavaScript)**
  9. **[JSON Server](https://github.com/typicode/json-server)**
  10. **[Feather Icons](https://feathericons.com/)**
  11. **[Netlify](https://www.netlify.com/)**
  12. **[NodeJS](https://nodejs.org/en/)**
  13. **[Radix UI](https://www.radix-ui.com/)**
  14. **[React](https://pt1.br.react.dev/)**
  15. **[Sentry](https://sentry.io/welcome/)**
  16. **[TailwindCSS](https://tailwindcss.com/)**
  17. **[TailwindCSS Variants](https://www.tailwind-variants.org/)**
  18. **[TypeScript](https://www.typescriptlang.org/)**
  19. **[Vite](https://vitejs.dev/)**
  20. **[Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)**

---

## :truck: Entrega e distribuição continua

**<https://dtmoney-aszurar.netlify.app//>**

- Para a publicação da aplicação foi por meio da plataforma **[Netlify](https://www.netlify.com/)** onde é possível publicar de forma rápida, fácil e simples projetos React que estão hospedados no GitHub, GitLab, dentre outras plataformas de repositório remoto de graça.
- Com isso, o CI/CD já é aplicado automaticamente por meio dessa plataforma definindo a branch de produção, sempre que houver uma atualização nela, será gerado uma nova versão do projeto e já publicado.
- Além disso, podemos customizar o próprio endereço do site, adicionar ferramentas dentre outras funcionalidades facilmente.

<div align="center">
   <img src="https://i.imgur.com/95151dy.png" width="1000" alt="design do projeto">
</div>

---

## :package: Como baixar e executar o projeto

### Baixar

- Clonar o projeto:

  ```bash
   git clone https://github.com/Aszurar/dtmoney
  ```

- É necessário ter o Node.js e um gerenciador de pacotes, como o Yarn, instalados em seu sistema. Se você ainda não os tem, siga estas instruções:
  - [Instalação do NodeJS](https://nodejs.org/en/)
  - [Instalação do Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)

- Instalação das dependências:
  - Execute o comando abaixo dentro da pasta do projeto

    ```bash
      yarn
    ```

### Execução

- Caso tudo tenha sido instalado com sucesso, basta executar na raiz do projeto:

  ```bash
    yarn dev
  ```

---

<div align="center">

Desenvolvido por :star2: Lucas de Lima Martins de Souza.

</div>
