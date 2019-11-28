// test/basic-test.spec.js
import { knex } from "../app/config/database";

describe("sample test suite - setup", _ => {
  it("preparando banco", done => {
    console.log("preparing test db...");
    knex.migrate.latest().then(_ => {
      console.log("done!");
      done();
    });
  });
});
