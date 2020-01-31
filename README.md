# operacional_api

![Status dos testes](https://github.com/casamagalhaes/operacional_api/workflows/Rodar%20os%20testes/badge.svg)

Protótipo de API para o [App Operacional](https://github.com/casamagalhaes/operacional_app)

Documentação principal
[aqui](https://docs.google.com/document/d/17R4A-DA56kVHHrNPb76PM0yAPd7EVvbecSOlMG7fvK4/edit)

Histórico de mudanças [aqui](./CHANGELOG.md)

## uso básico

Para subir o servidor de desenvolvimento

```bash
npm install
npm run dev
```

Para rodar os testes de API

```bash
npm install
npm run test
```

## Migrações

O banco do protótipo é gerido por migrações.

Pra criar do zero:

```bash
npx knex migrate:up
```

Pra voltar o batch de migrações:

```bash
npx knex migrate:down
```

## upload heroku

git push heroku master