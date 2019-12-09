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
			done(err);
		});
	});

	it("should find on assinante", done => {
		req.get("/assinante/1").end((err, ret) => {
			ret.status.should.be.equal(200);
			done(err);
		});
	});

	it("should NOT find on assinante", done => {
		req.get("/assinante/99999999").end((err, ret) => {
			ret.status.should.be.equal(404);
			done(err);
		});
	});

	it("should create assinante", done => {
		req.post("/assinante")
			.send({
				cnpj: "18.912.593/0001-28",
				descricao: "teste",
			})
			.end((err, ret) => {
				ret.status.should.be.equal(201);
				done(err);
			});
	});
});
