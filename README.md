# Ignite Gym

Aplicativo mobile desenvolvido com React Native e Expo, focado em gerenciamento de treinos em academias.

## Estrutura do Projeto

- frontend/: Aplicativo mobile com React Native + Expo
- backend/: API em Node.js com Fastify + Prisma

## Tecnologias Utilizadas

### Frontend (React Native + Expo)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [Axios](https://axios-http.com/)
- [Native Base](https://nativebase.io/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [Phosphor Icons](https://phosphoricons.com/)

### Backend
- [Fastify](https://www.fastify.io/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [Zod](https://zod.dev/)

---

## Funcionalidades

- Autenticação de usuários (login e cadastro)
- Visualização de grupos musculares
- Listagem de exercícios por grupo
- Detalhes dos exercícios com vídeo demonstrativo
- Registro e histórico de treinos realizados
- Perfil do usuário com opções de edição

## Capturas de Tela

| Tela de Login | Tela de Exercícios | Tela de Detalhes |
|---------------|--------------------|------------------|
| ![Login](./frontend/assets/login.png) | ![Exercícios](./frontend/assets/exercise.png) | ![Detalhes](./frontend/assets/history.png) |

## Instalaçãoo

1. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

## Executando o Projeto

1. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   # ou
   yarn start
   ```