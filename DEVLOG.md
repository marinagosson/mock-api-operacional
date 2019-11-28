# DevLog

Comentários um pouco mais descontraídos sobre o desenvolvimento sobre coisas que
não necessariamente cabem no [CHANGELOG](./CHANGELOG.md)

## 2019-11-27

Pende uma decisão de negócio se esta implementação continua ou não. Pelo sim
pelo não, subindo uns esqueletos de arame aqui.

Melhoramos o setup e o teardown da suíte de testes

## 2019-11-26

O [schema.json](./schema.json) inicial ficou pronto e agora podemos construir as
entidades a partir dele.

Contando as entidades, chegamos em 13 tabelas iniciais. Somado a isso, temos
workflows importantes como login, logout, ativação, refresh, rotinas de
permissão, sync dos dados e a própria contagem em si, nós imaginamos um esforço
de **45 turnos**.

Mas essa projeção imagina um recurso 100% dedicado, e _não temos isso_.

Toco a bola pro produto trabalhar e elaborar esse prazo com os recursos que
temos.

## 2019-11-25

Lembrando que, embora a api vá ter os timestamps e alguns outros (os marcadores)
indicando que determinado dado já existe no app, na api e nos backends, não
necessariamente eles vão trafegar.

Ia puxar logo o login e o logout mas tenho que pensar nessas 9 entidades e como
é que elas vão consumir o tempo de desenvolvimento.

<http://knexjs.org/#Schema-timestamps>

## 2019-11-22

O _module-alias_ tá fora.

Pende ler a collection do postman e o _documento de mais de 17 páginas_ pra
montar as rotas iniciais e o modelo de dados.

Lembrando que isso aqui é um **protótipo**. Esperamos validar rapidamente um
esquema de dados que não apenas atenda as entregas incrementais do projeto como
também uma API a ser montada em uma infra de nuvem mais arrojada.
