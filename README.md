# PokéDex Traduzida com React Native 🎮

Este projeto é uma aplicação mobile de uma PokéDex completa, desenvolvida como parte do curso de Desenvolvimento de Sistemas na **Etec de Embu**. O objetivo principal foi explorar a biblioteca `react-i18next` para implementar um sistema de tradução automática e gerenciamento de estado global com **Redux**.

<p align="center">
  <img src="./assets/logo.webp" alt="PokéDex Logo" width="300">
</p>

## 🚀 Funcionalidades

- **Listagem de Pokémons:** Exibição dinâmica de Pokémons consumindo a [PokeAPI](https://pokeapi.co/).
- **Paginação:** Botão "Carregar Mais" para buscar mais dados da API.
- **Detalhes Completos:** Ao clicar em um Pokémon, o usuário pode ver:
  - **Sobre (About):** Altura, peso, habilidades e espécie.
  - **Status Base (Base Stats):** HP, Ataque, Defesa, etc.
  - **Movimentos (Moves):** Lista de golpes que o Pokémon pode aprender.
- **Design Dinâmico:** As cores de fundo das telas de detalhes mudam automaticamente de acordo com o tipo principal do Pokémon (ex: fogo = vermelho, água = azul).
- **Tradução (i18n):** Sistema de tradução pronto para suporte multi-idiomas, atualmente configurado para Português (Brasil).

## 🛠️ Tecnologias Utilizadas

- **Core:** [React Native](https://reactnative.dev/) & [Expo](https://expo.dev/)
- **Gerenciamento de Estado:** [Redux](https://redux.js.org/) & [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- **Navegação:** [React Navigation](https://reactnavigation.org/)
- **Tradução:** [i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/)
- **Interface:** [React Native Paper](https://reactnativepaper.com/) & [Ionicons](https://ionicons.com/)
- **API:** [PokeAPI](https://pokeapi.co/)

## 📦 Como Executar o Projeto

1. Certifique-se de ter o **Node.js** e o **Expo CLI** instalados.
2. Clone este repositório.
3. No terminal, instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o projeto:
   ```bash
   npm start
   ```
5. Use o aplicativo **Expo Go** no seu celular para escanear o QR Code ou execute em um emulador Android/iOS.

---

Desenvolvido por **Lucas Alves Marques** como projeto acadêmico.
