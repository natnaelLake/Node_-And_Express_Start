
const express = require('express');
const port = process.env.PORT || 5000;
const hostname = 'localhost';
const path = require('path');
const app = express();
// const Router = require('./Routes/api/members')

//init middleware
// app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.resolve(__dirname, 'public')));
app.use('/api/members',require('./Routes/api/members'))


app.use((err, req, res, next) => {
    res.status(404).send("There is the error of server.")
})
app.listen(port,hostname,() =>
{
    console.log(`the server is run on: http://${hostname}:${port}`)
});