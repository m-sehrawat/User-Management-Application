const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    role: { type: String, required: true },
    city: { type: String, required: true },
    regDate: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});


module.exports = model('user', userSchema);
