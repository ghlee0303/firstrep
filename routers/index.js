const express = require('express');
const { User } = require('../models');

const router = express.Router();

let contents;
router.route('/') 
    .get(async (req, res, next) => {
        try {
            contents = await User.findAll({});
            res.render('index', { Users : contents});
        } catch (err) {
            console.log(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try {
            User.create({
                name: req.body.name,
                address: req.body.address,
            });
            res.redirect('/');
        } catch (err) {
            console.log(err);
            next(err);
        }
    });


module.exports = router;