/*  Lab06
 *  
 *Oct 24th 2018
 * Hamin Hong cs 336
 */

const express = require('express');
const app = express();
const http_status = require('http-status-codes');
const bodyParser = require('body-parser');

const HOST = "localhost";
const PORT = 3000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/request', function(req, res) {
    res.send('\nGot a GET request');
});

app.head('/request', function(req, res) {
    res.send('\nGot a HEAD request');
});

app.post('/request', function(req, res) {
    res.send('\nGot a POST request' + req.body.key);
});

app.put('/request', function (req, res) {
    res.send('\nGot a PUT request' + req.body.key);
});

app.delete('/request', function (req, res) {
    res.send('\nGot a DELETE request' + req.body.key);
});

app.get('/forms', function (req, res) {
    res.send('\nGot a GET request - get data from an user')
}); 

app.post('/my-handling-form-page', function (req, res) {
    res.send('\nHello, form POST!<br>User name: <code>' + req.body.user_name + '</code>'
    + '<br>Mail: <code>' + req.body.user_mail + '</code>' 
    + '<br>Posted message: <code>' + req.body.user_message + '</code>');
});

app.all('*', function(req, res) {
    res.sendStatus(http_status.BAD_REQUESTf);
});

app.listen(PORT, HOST, () => console.log(`Lab06 app listening on ${HOST} : ${PORT}!`));