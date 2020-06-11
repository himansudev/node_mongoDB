
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017//TodoApp';

// Database Name
const dbName = 'Todos';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
 
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  const collectionName = 'Todos'

  client.close()

});

//Inserting Multiple Documents
const insertMultipleDocuments = function(db, collectionName, dataArray, callback) {
    // Get the documents collection
    const collection = db.collection(collectionName);
    // Insert some documents
    collection.insertMany(dataArray, function(err, result) {
        
        if (err) {
            console.log('Super Error : ', err);
            callback(undefined);
        }
        else {
            callback(result);
        }
    });
  }


  //Inserting A Document 
  const insertDocument = (db, collectionName, data) => {
    const collection = db.collection(collectionName)

    collection.insertOne(data, (err, result) => {
      if (err) {
        console.log('Error : ', err);
      }
      else {
        console.log(result.ops);
      }
    });
  };


  //Get Documents
  const getrDocuments = function(db, collectionName, filterObject){ //, callback) {
    // Get the documents collection
    const collection = db.collection(collectionName);
    // Find some documents
    
    collection.find(filterObject).toArray(function(err, docs) {
      console.log("Found the following records");
      console.log(docs)
      //callback(docs);
    });
  }

  //Here We Have Used The Promise
  const getDocuments_withPromise = (db, collectionName) => {
    const collection = db.collection(collectionName);
    collection.find().toArray.then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable To Fetch Todos', err);
    })
  };


  //Update Records
  const updateDocument = function(db, collectionName, update, criteria) {//, callback) {
    // Get the documents collection
    const collection = db.collection(collectionName);
    // Update document where a is 2, set b equal to 1
    collection.updateOne(criteria, { $set: update }, function(err, result) {
        console.log(result);
      console.log("Updated the document with the field a equal to 2");
      //callback(result);
    });  
  }


  //Remove A Document
  const removeDocument = function(db, collectionName, criteria) { 
    // Get the documents collection
    const collection = db.collection(collectionName);
    // Delete document where a is 3
    collection.deleteOne(criteria, function(err, result) {
      
      if (err) {
        console.log('Error: While Removing');
      }
      else {
        console.log("Removed Sucessfullly");
      }

    });    
  }