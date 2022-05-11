const request = require('supertest');
const app = require('../app');

describe("EditPlate", function () {
    let data = {
        "name": "jack",
        "plate": "aa111aaa",
    };
    it("returns status 200", function () {
        it('responds with json', function (done) {
            request(app)
                .post('/editPlate')
                .send(data)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(function(res) {
                    res.body.message = 'Edit ok';
                })
                .expect(200, done);
        });
    });
});
