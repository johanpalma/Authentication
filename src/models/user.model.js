var { Schema, model } = require('mongoose');

var UserSchema = Schema({
    name: String,
    surname: String,
    nick: String,
    email: String,
    password: String,
    role: String,
});

module.exports = model('User', UserSchema);
