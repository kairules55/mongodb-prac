//Import the library
const mongoose = require('mongoose');

//Make it connect to the database
mongoose.connect('mongodb://localhost/contacts_db');

//Take the connection in variable
const db = mongoose.connection;

//Check if the connection is successful or not
db.on('error', console.error.bind(console, 'Error'));
db.once('open', function () {
    console.log('Database connect ho gaya');
});