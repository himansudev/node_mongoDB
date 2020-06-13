const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const objId = '5ee515cbbd5fb443eab8e983';
Todo.findByIdAndDelete(objId,function (err,result) {
  console.log(err);
  console.log(result);
});

