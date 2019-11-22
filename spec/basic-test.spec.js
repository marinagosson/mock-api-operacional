// test/basic-test.spec.js
import chai from "chai";
import chaiHttp from "chai-http";

import Knex from "knex";
import knexfile from "../knexfile";

import { app } from "../app";

const knex = Knex(knexfile.test);

chai.use(chaiHttp);
chai.should();

describe("sample test suite", _ => {
	const req = chai.request(app).keepOpen();

	before(done => {
		console.log("preparing test db...");
		knex.migrate.latest().then(_ => {
			console.log("done!");
			done();
		});
	});

	after(done => {
		console.log("closing request");
		req.close();
		console.log("cleaning up testing db...");
		knex.migrate.rollback().then(_ => {
			console.log("done!");
			done();
		});
	});

	it("should say hello", done => {
		console.log("Hello!");
		done();
	});

	it("should be online", done => {
		req.get("/status").end(ret => {
      console.log(app)
			ret.status.should.be("200");
			done();
		});
	});
});
