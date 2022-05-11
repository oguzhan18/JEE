var express = require('express');
var router = express.Router();
var fs = require('fs');

router.delete('/:plate', function (req, res, next) {

    fs.readFile('routes/data.json', 'utf8', function (err, data) {
        let json = JSON.parse(data);
        json.forEach((entry, i) => {
           if(entry.plate === req.params.plate.trim()){
               json.splice(i,1);
           }
        });

        fs.writeFile('routes/data.json', JSON.stringify(json), (err) => {
            if (err) throw err;
            res.status(200).send({message: 'Delete ok'})
        });
    })
});

module.exports = router;
