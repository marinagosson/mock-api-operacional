# operacional_api

![Status dos testes](https://github.com/casamagalhaes/operacional_api/workflows/Rodar%20os%20testes/badge.svg)

Protótipo de API para o [App Operacional](https://github.com/casamagalhaes/operacional_app)

Documentação principal
[aqui](https://docs.google.com/document/d/17R4A-DA56kVHHrNPb76PM0yAPd7EVvbecSOlMG7fvK4/edit)

Histórico de mudanças [aqui](./CHANGELOG.md)

## uso básico

Instalção:

```bash
sudo apt install nodejs
npm install sqlite3 --save
```

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

## Heroku

Para inicializar o heroku

```
heroku login
```

Para adicionar a url do git do heroku localmente

```
git remote add heroku <url_aqui>
```

Para atualizar a máquina do heroku

```
git push heroku master
```

Para fazer um restart na máquina

```
heroku dyno:restart ––app operacional
```