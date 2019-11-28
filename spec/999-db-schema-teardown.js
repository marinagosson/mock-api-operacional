// test/basic-test.spec.js
import { knex } from "../app/config/database";

describe("sample test suite - tear down", _ => {
  it("limpando banco", done => {
    console.log("cleaning up testing db...");
    knex.migrate.rollback().then(_ => {
      console.log("done!");
      done();
    });
  });
});
