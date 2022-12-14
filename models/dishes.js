const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dish = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    description: {
        type: String,
        require: true
    }
},
    {
        timestamps: true
    });

const dishes = mongoose.model('Dish', dish);
module.exports = dishes;