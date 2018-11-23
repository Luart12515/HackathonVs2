const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const USER = require('../models/users');

ROUTER.get('/', async (req, res ) => {
    const USERS = await USER.find();
    console.log(USERS);
    res.json(USERS);
});

module.exports = ROUTER;