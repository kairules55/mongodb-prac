const express = require('express');
const path = require('path');
const port = 8000;
const db = require('./config/mongoose')
const app = express();

//Setup EJS
//This creates a new porety view engine and tell app that we are using ejs
app.set('view engine', 'ejs');

//This will tell the express that where our views are kept
app.set('views', path.join(__dirname, 'views'));

//Middleware
//This is a parser middleware it encodes and decodes the data sent by browser and add that in response object
app.use(express.urlencoded());

//Middleware to use static files
app.use(express.static('assets'));


var contacts = [{
        name: 'Krishana',
        phone: '7014250178'
    },
    {
        name: 'Ali',
        phone: '1234567890'
    },
    {
        name: 'Sahil',
        phone: '0123456789'
    }
];

app.get('/', function (request, response) {
    response.render('home', {
        title: "Contact List",
        contacts: contacts
    });
});

app.post('/create-contact', function (request, response) {
    contacts.push(request.body);
    response.redirect('back');
});

app.get('/delete/', function (request, response) {
    let phone = request.query.phone;
    const index = contacts.findIndex(function (i) {
        return i.phone == phone;
    });
    if (index != -1) {
        contacts.splice(index, 1);
    }
    response.redirect('back');
});


app.listen(port, function (error) {
    if (error) {
        console.log('ni chal raha he server');
        return;
    }
    console.log('server chal gaya bc');
});