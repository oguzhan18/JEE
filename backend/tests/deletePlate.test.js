const request = require('supertest');
const app = require('../app');

describe("DeletePlate", function () {
    let data = {
        "name": "john",
        "plate": "bb222abc",
    };
    it("returns status 200", function () {
        it('responds with json', function (done) {
            request(app)
                .post('/addPlate')
                .send(data)
                .post('/deletePlate')
                .send(data)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(function(res) {
                    res.body.message = 'Delete ok';
                })
                .expect(200, done);
        });
    });
});
