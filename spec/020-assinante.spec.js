// test/basic-test.spec.js
import chai from "chai";
import chaiHttp from "chai-http";

import { app } from "../app";

chai.use(chaiHttp);
chai.should();

describe("assinante tests", _ => {
  const req = chai.request(app).keepOpen();

  it("should find assinante", done => {
    req.get("/assinante").end((err, ret) => {
      ret.status.should.be.equal(200);
      console.log(ret.body);
      done(err);
    });
  });
});
