var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//const url = 'mongodb://localhost:27017/TodoApp';

mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

//module.exports = {mongoose};