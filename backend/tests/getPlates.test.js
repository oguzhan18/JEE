const request = require('supertest');
const app = require('../app');

describe("GetPlates", function () {
    it("returns status 200", function () {
        it('responds with json', function (done) {
            request(app)
                .get('/getPlates')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(2002, done);
        });
    });
});
