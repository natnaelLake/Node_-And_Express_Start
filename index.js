const mongoose = require('mongoose');

const Dish = require('./models/dishes');

const url = 'mongodb://localhost:27017/natnael';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connected Correctly to server');

    var newDish = Dish({
        name: 'Bewuketu',
        description: 'test'
    })
newDish.save()
    .then((dish) => {
        console.log(dish);

        return Dish.find({}).exec();
    })
    .then((dishes) => {
        console.log(dishes);
        return Dish.remove({})
    })
    .then(() => {
        return mongoose.connection.close();
    })
})
.catch((err) => {
    console.error(err)
})