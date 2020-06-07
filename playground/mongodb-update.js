const {MongoClient, ObjectID} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017//TodoApp';

// Database Name
const dbName = 'Todos';

// Create a new MongoClient
const client = new MongoClient(url);


// Use connect method to connect to the Server
client.connect(function(err) {
 
    if (err) {
        console.log('Failed To Connect To The Server');
    } 
    else {
        console.log("Connected successfully to server");
    }
    
    const criteria1 = {text:'eat lunch'};
    const update = {text:'sleep'};
    const db = client.db(dbName);
  
    const collectionName = 'Todos'
    
    findAndUpdateOneRecord(db, collectionName, criteria1, update)

  });


  const findAndUpdateOneRecord = (db, collectionName, criteria, update) => {
    let collection = db.collection(collectionName);

    collection.findOneAndUpdate(criteria, {$set:update}, {returnOriginal:false}).then((result) => {
        console.log(result);
    });
  };