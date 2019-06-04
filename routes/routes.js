const express = require('express');
const router = express.Router();
const path = require('path');
const Car = require(path.join(__dirname, '../models', 'Tavara.js'));

router.get('/', (req, res) => {
    res.render('addcar', {title: 'Lisää uusi auto'});
});

router.post('/', (req, res) => {
    console.log('post called');

    
    const newCar = new Car(req.body);
    newCar.save().then(result => {
        console.log(result);
        Car.find((err, cars) => {
            if (err) console.log(err);
            res.render('cars', {title: 'Autosivu', cars: cars});
            console.log(cars);
        });

    }).catch(err => console.log(err));
});

router.get('/cars', (req, res) => {
    Car.find((err, cars) => {
        if (err) console.log(err);
        res.render('cars', {title: 'Autosivu', cars: cars});
        console.log(cars);
    });
});

router.get('/remove/:id', (req, res) => {
    console.log(req.params);
    Car.findByIdAndRemove({_id: req.params.id}, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Document removed: ' + req.params.id);
            res.redirect('/cars');
        }
    });
    });
        

module.exports = router;