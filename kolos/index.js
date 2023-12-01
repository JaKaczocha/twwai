const express = require('express');
const path = require('path');

const app = express();
const port = 3003;

let users = [ {name: "krzyś1", email: "1sda@gmail.com"},
{name: "krzyś2", email: "2sda@gmail.com"},
{name: "krzyś3", email: "3sda@gmail.com"}];


app.set('view engine', 'html');
app.engine('html',require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.info(`Server is running at port ${port}`);
})

app.get('/api/user/:id', (request, response) => {
    
    let id = request.params.id;

    if(id >= 1 && id <= users.length) {
        response.send( users.at(id - 1));
    }
})



app.get('/api/users', (request, response) => {
    response.send(users);


})



app.get('/', (request, response) => {
    response.render(__dirname + '/index.html',{})
})

let data = {
    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
    datasets: [{
        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
    }, {
        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
    }, {
        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
    }, {
        data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
    }, {
        data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
        label: "North America",
        borderColor: "#c45850",
        fill: false
    }]
 };
 

 app.get('/continents', (request, response) => {
    response.render(__dirname + '/index2.html',{chart: JSON.stringify(data)});
 })