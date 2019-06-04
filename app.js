const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const routes = require(path.join(__dirname, 'routes', 'routes.js'));
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Yhdistetään sovellus tietokantaan
mongoose.connect('mongodb://localhost:27017/kauppalista', {useNewUrlParser: true});

// Asetetaan 'view engine' käyttöön, kerrotaan sovellukselle, että halutaan käyttää pugia
app.set('view engine', 'pug');

// Käytetään / routeja
app.use('/', routes);

// Kuunnellaan porttia 3000
app.listen(3000);