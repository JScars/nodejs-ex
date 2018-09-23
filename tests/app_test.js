// var server   = require('../server'),
//     chai     = require('chai'),
//     chaiHTTP = require('chai-http'),
//     should   = chai.should();

// chai.use(chaiHTTP);

// reqServer = process.env.HTTP_TEST_SERVER || server

// describe('Basic routes tests', function() {

//     it('GET to / should return 200', function(done){
//         chai.request(reqServer)
//         .get('/')
//         .end(function(err, res) {
//             res.should.have.status(200);
//             done();
//         })

//     })

//     it('GET to /pagecount should return 200', function(done){
//         chai.request(reqServer)
//         .get('/pagecount')
//         .end(function(err, res) {
//             res.should.have.status(200);
//             done();
//         })

//     })
// })


//  OpenShift sample Node application
var express = require('express'),
    app     = express();

app.engine('html', require('ejs').renderFile);

var port = 3000,
    ip   = '0.0.0.0';

app.get('/', function (req, res) {
  res.render('index.html');
});

app.use(function(err, req, res, next){
    console.log(err);
    res.status(500).send('Something bad happened! AGAIN!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);
console.log('test');
module.exports = app ;
