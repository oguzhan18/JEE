var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {

    let obj;
    fs.readFile('routes/data.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        try {
            res.send(obj);
        } catch (err) {
            return next(err);
        }

    });
});

module.exports = router;
