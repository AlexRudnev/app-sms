const { Binotel2 } = require('../models')
const { validationResult } = require('express-validator');
const { now } = require('sequelize/dist/lib/utils');

function create(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    Binotel2.findOne({ where: { mobile: req.body.mobile } }).then(user => {
            if (user) {
                return Promise.reject({ statusCode: 422, message: "такой номер уже есть в базе" })
            } else {
                const { name, mobile } = req.body;
                return Binotel2.create({ name, mobile, date: now('DD-MM-YYYY'), ColorSmile: 0, ord: 0 })
            }
        })
        .then(user => {
            res.json(user)
        })
        .catch(error => {
            res.status(error.statusCode || 400).json({ error: error.message })
        })
}



module.exports = {
    create,
    // getClient
}