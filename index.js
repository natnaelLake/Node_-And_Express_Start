const express = require('express');
const app = express();
const assert = require('assert');
const dboper = require('./operations')
const {MongoClient} = require('mongodb');const router = express.Router();
var url = "mongodb://localhost:27017/";
const dbName = 'natnael';
const userRouter = require('./Router/users')
MongoClient.connect(url).then((client) => {
    console.log('Connected to the database');
    const db = client.db(dbName);
    dboper.insertDocument(db, { name: "Bewuketu", last: "lake", email: "natilake12@gmail.com", password: "welcomewel" }, "nati").then((result) => {
        console.log("Insert Document:\n", result.ops);

        return dboper.findDocuments(db, 'nati')
    }).then((docs) => {
        console.log('Found Documents:\n', docs);
        return dboper.updateDocument(db, { name: 'Bewuketu' }, { email: 'updatedemail@gmail.com' }, 'nati')
    }).then((result) => {
        console.log("The updated data is : \n", result);
        return dboper.findDocuments(db, 'nati')
    }).then((result) => {
        console.log('Found Documents:\n', result);
        return db.dropCollection('nati')
    }).then((result) => {
        console.log('the dropped collection is: ', result);
        client.close();
    })
}).catch((err) => {
    console.log(err);
})
app.listen(3000, () => {
    console.log("the server running on: http://localhost:3000")
});