// test/basic-test.spec.js
import chai from "chai";
import chaiHttp from "chai-http";

import { app } from "../app";

chai.use(chaiHttp);
chai.should();

describe("basic tests", _ => {
  const req = chai.request(app).keepOpen();

  it("should say hello", done => {
    console.log("Hello!");
    done();
  });

  it("should be online", done => {
    req.get("/status").end((err, ret) => {
      ret.status.should.be.equal(200);
      done(err);
    });
  });

  it("should say 404 - not found", done => {
    req.get("/tatu-em-cima-do-armario-alguem-colocou-la").end((err, ret) => {
      ret.status.should.be.equal(404);
      done(err);
    });
  });
});
