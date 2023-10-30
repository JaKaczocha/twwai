const express = require('express');
const questions = require('./questions').questions;
const config = require('./config');



const app = express();

app.get('/api/questions',(request, response) => {
    response.send(questions);
});

app.get('/api/questions/:id',(request, response) => {

    let thisId = request.params.id;

    console.info(thisId);

    if(thisId >= 0 && thisId < questions.length) {
        response.send(questions.at(thisId));
    }

});



app.listen(config.port, function () {
    console.info(`Server is running at port ${config.port}`);
});
