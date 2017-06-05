var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('/GET topArtists', () => {
      it('it should GET the topArtists', (done) => {
        chai.request(server)
            .get('/topArtists')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('topartists');
              done();
            });
      });

      it('it should GET the topTracks', (done) => {
      	var tag = "michael+jackson";
        chai.request(server)
            .get('/topTracks?tag='+tag)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('tracks');
              done();
            });
      });]
  });
