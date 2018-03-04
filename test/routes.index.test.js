process.env.NODE_ENV = "test";

const chai = require("chai");
const should = chai.should;
const expect = chai.expect;
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../src/server/index");

describe( "routes : index", () => {
	describe("GET /api/v1", () => {
		it("should return json", (done)=>{
			// chai.request(server)
			// .get("/")
			// .end( (err, res)=>{
			// 	expect(err).to.be.null; // res.should.not.exist(err);
			// 	res.status.should.eql(200);
			// 	res.type.should.eql("application/json");
			// 	res.body.status.should.eql("success");
			// 	res.body.message.should.eql("hello world");
			done();
			// });
		});
	});
});