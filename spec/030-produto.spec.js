// test/basic-test.spec.js
import chai from "chai";
import chaiHttp from "chai-http";

import { app } from "../app";

chai.use(chaiHttp);
chai.should();

describe("produto tests", _ => {
  const req = chai.request(app).keepOpen();

  it("should find produto", done => {
    req.get("/produto").end((err, ret) => {
      ret.status.should.be.equal(200);
      done(err);
    });
  });
});
