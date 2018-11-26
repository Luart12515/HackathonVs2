const MONGOOSE = require('mongoose');
const { Schema } = MONGOOSE;

const UserSchema = new Schema({
    nombre:{ type: String, required: true },
    correo:{ type: String, required: true },
    password:{ type: String, required: true }
});

module.exports = MONGOOSE.model('Users', UserSchema);