const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');    // including database
const path = require('path');

connectDB();  // calling database connection function

app.use(express.static('public'));   // including static middleware (for static html and css files)
app.use(express.json());  // to enable data reception by express server as json data


// setting up Template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


// Routes  
app.use('/api/files',require('./routes/files'))
app.use('/files', require('./routes/show'))
app.use('/files/download', require('./routes/download'));


// Listening server connection
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});