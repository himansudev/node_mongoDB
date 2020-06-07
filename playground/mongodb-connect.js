// const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017//TodoApp', (err, client) => {
//     if (err) {
//        return console.log('Unable To Connect To MongoDB server');
//     }
    
//     console.log('Connected To MongoDB Server');
//     const col = client.db('TodoApp').collection('Todos');
    
//     const dataToInsert = {text:'Something to do', completed: false};

//     // db.collection(, dataToInsert, (err, result) => {
//     //     if (err) {
//     //         return console.log('Unable to insert todo,  err');
//     //     }
//     //     else {
//     //         console.log(JSON.stringify(result.ops, undefined, 2));
//     //     }
//     // });

//     col.insertMany([dataToInsert], (err, result) => {

//         // col.aggregation({}, {cursor: {}}).toArray(function(err, items) {

//         //     //test.equal(null, err);
            
//         //     //test.equal(4, items.length);
            
//             console.log(result, undefined, 2);

//             client.close();
            
//         //     });

//             if (err) {
//                 console.log('Error');
//             }
//             else {
//                 console.log('Sucessful');
//             }
//     });

//     //client.close();
// });

//--------------------------

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

  const dataToInsert = [{a : 1}, {a : 2}, {a : 3}]

//insertDocument(db, 'Users', {name:'Rohit', age:24, location:'Wuhan'});

    //Inserting Records
    // insertDocuments(db, collectionName, dataToInsert, (result) => {
    //     if (result) {
    //         console.log(result.ops);
    //         console.log("Inserted 3 documents into the collection");
    //     }
    //     else {
    //         console.log('Error While Inserting Data');
    //     }
        
    //  });


    //Get Data 
    // const filter = {a:1}
    //findDocuments(db, collectionName);

    //const criteria = {a:3};
    // const update = {c:2};
    // updateDocument(db, collectionName,update, criteria);

    //removeDocument(db, collectionName, criteria)
    // const dataArray = [{
    //     name:'Himansu', 
    //     age : 26
    // }];
    // insertMultipleDocuments(db, collectionName, dataArray, (result) => {
        
    //     if (result) {
    //         console.log(result.ops);
    //     }
    //     else {
    //         console.log('Oops There Was An Error')
    //     }
    // });

    //findDocuments(db, collectionName);
  //client.close();
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
  const findDocuments = function(db, collectionName, filterObject){ //, callback) {
    // Get the documents collection
    const collection = db.collection(collectionName);
    // Find some documents
    
    collection.find(filterObject).toArray(function(err, docs) {
      console.log("Found the following records");
      console.log(docs)
      //callback(docs);
    });
  }


  const get_documents = (db, collectionName) => {
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
    collection.updateOne(criteria
      , { $set: update }, function(err, result) {
        console.log(result);
      console.log("Updated the document with the field a equal to 2");
      //callback(result);
    });  
  }


  //Remove A Document
  const removeDocument = function(db, collectionName, criteria) { //,callback) {
    // Get the documents collection
    const collection = db.collection(collectionName);
    // Delete document where a is 3
    collection.deleteOne(criteria, function(err, result) {
      
      console.log("Removed the document with the field a equal to 3");
      //callback(result);
    });    
  }