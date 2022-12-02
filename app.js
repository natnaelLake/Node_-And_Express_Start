const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('this is the page of get.');
});
app.post('/', (req, res) => {
    res.send("this is  the page of post.");
})
app.put('/', (req, res) => {
    res.send("this is the page of put.");
})
app.delete('/', (req, res) => {
    res.send("this is the page of delete.");
})
app.listen(5000)
