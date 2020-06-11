var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/TodoApp';

mongoose.connect(process.env.MONGODB_URI || url, {useNewUrlParser: true});

//module.exports = {mongoose};