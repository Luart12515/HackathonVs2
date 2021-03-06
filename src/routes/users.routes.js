const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const USER = require('../models/users');

ROUTER.get('/', async (req, res ) => {
    const GET = await USER.find();
    res.json(GET);
});

ROUTER.get('/:id', async (req, res) => {
    const GET = await USER.findById(req.params.id);
    res.json(GET);
});

ROUTER.post('/', async (req, res ) => {
    const {nombre, correo, password} = req.body;
    const POST = new USER({ nombre, correo, password });
    await POST.save();
    res.json({status : 'Task saved'});
});

ROUTER.put('/:id', async (req, res ) => {
    const { nombre, correo, password } = req.body;
    const UPDATE = { nombre, correo, password };
    await USER.findByIdAndUpdate(req.params.id, UPDATE);
    res.json({status : 'Task Updated'});
});

ROUTER.delete('/:id', async (req, res ) => {
    await USER.findByIdAndRemove(req.params.id);
    res.json({status : 'Task Deleted'});
});

module.exports = ROUTER;