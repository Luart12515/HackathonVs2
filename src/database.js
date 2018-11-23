const MONGOOSE = require('mongoose');

const URI = 'mongodb://localhost/hackathonv2';

MONGOOSE.connect(URI, {useNewUrlParser: true})
.then(db => console.log('DB is connected'))
.catch(err => console.error(er));

module.exports = MONGOOSE;