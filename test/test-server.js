var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app.js');
//var should = chai.should;
var expect = chai.expect;

chai.use(chaiHttp);

describe('server', function() {

  it('should respond with 200 on / GET', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        if (err) { console.log('Error:', err)}
        console.log('Res:', res)
        expect(res).to.have.status(200);
        done();
      })
  });

});
