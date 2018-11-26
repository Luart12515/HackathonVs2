const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const USER = require('../models/resume');

ROUTER.get('/', async (req, res ) => {
    const GET = await USER.find();
    res.json(GET);
});

ROUTER.get('/:id', async (req, res) => {
    const GET = await USER.findById(req.params.id);
    res.json(GET);
});

ROUTER.post('/', async (req, res ) => {
    const { nombre, edad, correo, telefono, objetivo, experiencia, formacion_ac, habilidades, herramientas} = req.body;
    const POST = new USER({ nombre, edad, correo, telefono, objetivo, experiencia, formacion_ac, habilidades, herramientas});
    await POST.save();
    res.json({status : 'Task saved'});
});

ROUTER.put('/:id', async (req, res ) => {
    const { nombre, edad, correo, telefono, objetivo, experiencia, formacion_ac, habilidades, herramientas} = req.body;
    const UPDATE = { nombre, edad, correo, telefono, objetivo, experiencia, formacion_ac, habilidades, herramientas};
    await USER.findByIdAndUpdate(req.params.id, UPDATE);
    res.json({status : 'Task Updated'});
    
});

ROUTER.delete('/:id', async (req, res ) => {
    await USER.findByIdAndRemove(req.params.id);
    res.json({status : 'Task Deleted'});
});

module.exports = ROUTER;