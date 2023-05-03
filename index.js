const { Telegraf } = require("telegraf");
const http = require('http');
var express = require('express');
var app = express();
var cors = require('cors')

app.use(cors({ origin: 'http://127.0.0.1:5501' }));
const server = http.createServer(app);


app.get('/', async function (req, res) {
    console.log(req.query.key.trim())
    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'https://kichhoat24h.com/api/pid-check',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Cookie': '.AspNetCore.Session=CfDJ8Lnsp8HTNu9Nn9aF/IjmTF7BKyyemZRCLtR3uWvNei0PB9r0/vZeQ7GCNSfNqAxZAEb9e0SkqOH5M+hAFdyyG3XjRCzGo1vjKTyNqVSX0pz73dXXVWEnUc6QqauM7BsxWbkdo0hpKzL8fRm40GXyJGL0lSYGmuCYTD/TBIQcMAy4; .AspNetCore.Antiforgery.k41BjJ1sydc=CfDJ8Lnsp8HTNu9Nn9aF_IjmTF6fmaG7UlgJtv-I0xrfjfotEwz0tDqGRaAMqGN3Y97ofDjVspbej3eK5AVf39sQ_IV4_oYLt1PIATBg_WgX4av8P1HTpfznvox0hqlqD5X0NeoicJhfGhUwYuTD3St0WQo; .AspNetCore.Identity.Application=CfDJ8Lnsp8HTNu9Nn9aF_IjmTF5E60kF7_zdo4-Yozm-O6pii8aAoC4M4s1Jr-w7TuUcKyVtRZ0CWHY-10aNCV0XB7ky4eIoc37Rys45nWlNQBAdluVDOq_1g3-fKq3DcHvM1YkNWTgKAj0w5hXNHBvGZf78LQPpTBrYVQzjpVHYuKxxX1kfhjH4_2YqHJS1dHKv6eS_2UNOVtpi29VP9wobKtFsN7u4OgYO0FnkllI0bpoJqeZA_LjoDHBeYxN-t5lOtvMhrsJhwWws_vmLZ83SGbhsdXqrjZusiISIht_0p5FGFVDzHnHdD81-fdeBPxwiBO34F2TduY_CFagcx46sqVwk7yq2HlrC7NCGbVS9cyuhzIQlIcHlZvxLLBH9JtIULmSiliIJLSDMOv6FFtQ9HOFyu7he5L_2wHPKVELwykapi2ztqAVUk_8y7M2sr-J3SjFZ1542i9y1ofq5Fa-oZMB4PcOUEhTVtpk8qAFUNXj3g4bMSjy8BufnKGlWJI_xHoWLqUiDkJymrfjrMz4cnEYDNODa2dIzEgSHyI3WkFnAUwaYKFMY55I33Hf62BqHbxPeGEUbW-i8bWKA6vFL3GTIKRI-YcvUECTSrozYRzI0-jRJs2ZEIO-dIRik9dUHKYDOuLSALlte0saF9gFimoxdKj9DEYh2N1XtXJtdMCSKpK0rvEgcTIArpk-X5MPIFGwtx9UxLz1Ng8V5jZ4Qy6IyOfatJoJPVCwHeO8IzqM-'
        },
        body: 'type=0&data=' + req.query.key.trim()

    };
    await request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.send(response.body);
    });





})
let port = process.env.PORT || 8900;
server.listen(port, () => {
    //callback
    console.log("Backend Nodejs is running on the port: " + port);
})


