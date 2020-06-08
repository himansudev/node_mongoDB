const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const id = 'edd6e485b4c081e74bd833e';

const criteria = {_id:id}

const noRecords = () => {console.log('0 Matching Records Found');}

if (!ObjectID.isValid(id)) {
    console.log('Id Is Not Valid');
}


Todo.find(criteria).then((todos) => {
    if (!todos[0]) {return noRecords();}
    console.log(todos);
}).catch((err) => {
    console.log('ObjectID Invalid');
});

Todo.findOne(criteria).then((todo) => {
    if (!todo) {return noRecords();}
        console.log(todo);
}, (err) => {
    console.log('ObjectID Invalid');
});

Todo.findById(id).then((todo) => {
    if (!todo) {return noRecords();}
    console.log(todo);
}, (err) => {
    console.log('ObjectID Invalid');
});