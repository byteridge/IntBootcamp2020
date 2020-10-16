var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors());

app.get('/getUsers', function (req, res) {
    var data = [
        { "name": "Trilok", "email": "trilok@email.com" },
        { "name": "Netaji", "email": "netaji@email.com" }
    ];

    res.send(data);
})

var server = app.listen(8281, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
