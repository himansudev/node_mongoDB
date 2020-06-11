const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const id = '5edd6e485b4c081e74bd833e';

const criteria = {completed:false};

const noRecords = () => {console.log('0 Matching Records Found');}

//const {ObjectID} = require('mongodb');

if (!ObjectID.isValid(id)) {
    console.log('Id Is Not Valid');
}

const x = { brand: 'Nike' }

// Todo.findOneAndDelete({name:'himansu'}, function (err) {
//     if(err) console.log(err);
//     console.log("Successful deletion");
//   });


const objId = '5ee2836605f86f29b5233352';
Todo.findByIdAndDelete(objId,function (err) {
  if(err) console.log(err);
  console.log("Successful deletion");
});


// Todo.deleteOne({},function (err) {
//     if(err) console.log(err);
//     console.log("Successful deletion");
//   });

// Todo.find(criteria).then((todos) => {
//     if (!todos[0]) {return noRecords();}
//     console.log(todos);
// }).catch((err) => {
//     console.log('ObjectID Invalid');
// });

// Todo.findOne(criteria).then((todo) => {
//     if (!todo) {return noRecords();}
//         console.log(todo);
// }, (err) => {
//     console.log('ObjectID Invalid');
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {return noRecords();}
//     console.log(todo);
// }, (err) => {
//     console.log('ObjectID Invalid');
// });