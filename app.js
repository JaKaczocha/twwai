const express = require('express');
const config = require('./config').config; // dodając tę linię, trzeba pamiętać o stworzeniu pliku config.js

const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));



app.listen(config.port, function () {
    console.info(`Server is running at port ${config.port}`);
});



app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.get('/', (request, response) => {
    response.render(__dirname + '/index.html', {subject: 'Technologie webowe w aplikacjach Internetu', result: ' '})
})
app.get('/template/:variant/:a/:b', (request, response) => {
    const variant = request.params.variant;
    const a = Number(request.params.a);
    const b = Number(request.params.b);
    let result;

    switch(variant) {
        case 'sum':
            result = a + b;
            break;
        case 'sub':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            if(b !== 0) {
                result = a / b;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Error: Invalid operation';
    }

    response.render(__dirname + '/index.html', {result: result})
});





