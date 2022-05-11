const request = require('supertest');
const app = require('../app');

describe("AddPlate", function () {
    let data = {
        "name": "john",
        "plate": "bb222abc",
    };
    it("returns status 200", function () {
        it('responds with json', function (done) {
            request(app)
                .post('/addPlate')
                .send(data)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(function(res) {
                    res.body.message = 'data written to file';
                })
                .expect(200, done);
        });
    });
});
