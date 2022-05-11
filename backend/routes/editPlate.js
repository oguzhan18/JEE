var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/', function (req, res, next) {

    fs.readFile('routes/data.json', 'utf8', function (err, data) {
        let json = JSON.parse(data);

        json.forEach((entry, i) => {
            if(entry.plate === req.body[0].plate.trim()){
                json[i].name = req.body[1].name;
                json[i].plate = req.body[1].plate;
            }
        });

        fs.writeFile('routes/data.json', JSON.stringify(json), (err) => {
            if (err) throw err;
            res.status(200).send({message: 'Edit ok'})
        });
    })
});

module.exports = router;
