
const express = require('express');
const port = process.env.PORT || 5000;
const hostname = 'localhost';
const path = require('path');



const filepath = path.resolve(__dirname,'public','index.html')
const app = express();
app.get('/', (req,res) => {
    res.sendFile(filepath)  
})
app.use((err, req, res, next)=>{
    console.error(err);
    next(err)
})
app.use((err, req, res, next) => {
    res.status(404).send("There is the error of server.")
})
app.listen(port,hostname,() =>
{
    console.log(`the server is run on: http://${hostname}:${port}`)
});