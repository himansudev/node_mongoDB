
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
    
    const criteria1 = {_id:new ObjectID('5edbecd5597bce2dec84df32')};
    const criteria2 = {completed:false};
    const db = client.db(dbName);
  
    const collectionName = 'Todos'
      
    //findDocuments(db, collectionName);
    //   getCount(db, collectionName);
    //getCountPromise(db, collectionName);
    getDocuments_Promise(db, collectionName, criteria2);  
    //client.close();
  });
  


//Get Documents
const getDocuments = function(db, collectionName, filterObject){ //, callback) {

    // Get the documents collection
    const collection = db.collection(collectionName);
    // Find some documents
    
    collection.find(filterObject).toArray(function(err, docs) {
      console.log("Found the following records");
      console.log(docs)
      //callback(docs);
    });
  }


const getDocuments_Promise = (db, collectionName, filterObject) => {
    const collection = db.collection(collectionName);

    collection.find(filterObject).toArray().then((docs) => {
        console.log("Data", JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('There Was An Error : ', err);
    })
};


//Count 
const getCount = (db, collectionName) => {
    const collection = db.collection(collectionName);

    collection.find().count((err, count) => {
        if (err) {
            console.log('There Was An Error In Count');
        }
        else {
            console.log('Count : ', count);
        }
    });
};


const getCount_Promise = (db, collectionName) => {
    const collection = db.collection(collectionName);

    collection.find().count().then((count) => {
        console.log('Count Is : ', count);
    }, (err) => {
        console.log('Failed : ', err);
    });
};

  
