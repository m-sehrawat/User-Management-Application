const mongoose = require('mongoose');
const MONGO_PATH = "mongodb+srv://admin:admin@cluster0.mhpha.mongodb.net/User-Management-Application";

const connect = () => {
    return mongoose.connect(MONGO_PATH);
}

module.exports = connect;