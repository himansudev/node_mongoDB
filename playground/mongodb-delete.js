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
    const db = client.db(dbName);
  
    const collectionName = 'Todos'
      findOneAndDeleteARecord(db, collectionName, criteria1);
    //deleteRecord(db, collectionName, criteria1);
    //client.close();
  });
  

  const deleteRecords = (db, collectionName, criteria) => {

    let collection = db.collection(collectionName);

    collection.deleteMany(criteria).then((result) => {
        console.log(result);
    });


  }; 

  const deleteRecord = (db, collectionName, criteria) => {
    let collection = db.collection(collectionName);

    collection.deleteOne(criteria).then((result) => {
        console.log(result);
    });

  };

  const findOneAndDeleteARecord = (db, collectionName, criteria) => {
      let collection = db.collection(collectionName);

      collection.findOneAndDelete(criteria).then((result) => {
          console.log(result);
      });
  };