const assert = require('assert');
const { Collection } = require('mongoose');

exports.insertDocument = (db, document, collection, callback)=>{
    const coll = db.collection(collection);
    coll.insert(document, (err, result) => {
        assert.equal(err, null);
        console.log("Inserted. " + result.n + ' documents into the ' + collection);
        callback(result);
    })
}

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    coll.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        callback(docs);
    })
}

exports.removeDocuments = (db, document,collection, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(document,(err,result)=> {
        assert.equal(err, null);
        console.log("Removed the document ",document);
        callback(result)
    })
}
exports.updateDocument = (db, document,update,collection, callback) => {
    const coll = db.collection(collection);    
    coll.updateOne(document, { $set: update }, null, (err, result) => {
        console.log("Updated the document with", update);
        callback(result);
    })

}