const MONGOOSE = require('mongoose');
const { Schema } = MONGOOSE;

const UserSchema = new Schema({
    nombre:{ type: String, required: true },
    edad: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: String, required: true },
    objetivo: { type: String, required: true },
    experiencia: { type: String, required: true },
    formacion_ac: { type: String, required: true },
    habilidades: { type: String, required: true },
});

module.exports = MONGOOSE.model('User', UserSchema);