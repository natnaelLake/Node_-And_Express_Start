const express = require('express');
const app = express();
const assert = require('assert');
const dboper = require('./operations')
const {MongoClient} = require('mongodb');const router = express.Router();
var url = "mongodb://localhost:27017/";
const dbName = 'natnael';
const userRouter = require('./Router/users')
MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('Connected to the database');
    const db = client.db(dbName);
    dboper.insertDocument(db, { name: "Bewuketu", last: "lake", email: "natilake12@gmail.com", password: "welcomewel" }, "nati", (result) => {
        console.log("Insert Document:\n", result.ops);

        dboper.findDocuments(db, 'nati', (docs) => {
            console.log('Found Documents:\n', docs);
            dboper.updateDocument(db, { name: 'Bewuketu' }, { email: 'updatedemail@gmail.com' }, 'nati',(docs) => {
                console.log("The updated data is : \n", docs);
            })
        })
        dboper.findDocuments(db, 'nati', (docs) => {
            console.log('Found Documents:\n', docs);
            db.dropCollection('nati',(result) => {
                console.log('the dropped collection is: ',result);
            })
        })
       
    })
})
app.listen(3000, () => {
    console.log("the server running on: http://localhost:3000")
});