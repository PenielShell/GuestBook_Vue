var express = require('express');
var app = express();
var guestRoutes = express.Router();

// Require Guest model in our routes module
var Guest = require('../models/Guest');

// Defined store route
guestRoutes.route('/add').post(function(req, res) {
    var guest = new Guest(req.body);
    guest.save()
        .then(guest => {
            res.status(200).json({ 'guest': 'Guest added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
guestRoutes.route('/').get(function(req, res) {
    Guest.find(function(err, guests) {
        if (err) {
            console.log(err);
        } else {
            res.json(guests);
        }
    });
});

// Defined edit route
guestRoutes.route('/edit/:id').get(function(req, res) {
    var id = req.params.id;
    Guest.findById(id, function(err, guest) {
        res.json(guest);
    });
});

//  Defined update route
guestRoutes.route('/update/:id').post(function(req, res) {
    Guest.findById(req.params.id, function(err, guest) {
        if (!guest)
            return next(new Error('Could not load Document'));
        else {
            guest.name = req.body.name;
            guest.price = req.body.price;

            guest.save().then(guest => {
                    res.json('Update complete');
                })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
guestRoutes.route('/delete/:id').get(function(req, res) {
    Guest.findByIdAndRemove({ _id: req.params.id }, function(err, guest) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = guestRoutes;