'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    productId: {
        type: Number,
        Required: "Enter an id"
    },
    name: {
        type:String,
        Required: "Enter a name"
    },
    desc: {
        type:String,
        Required: "Enter a description"
    },
    price: {
        type: Number,
        Required: "Enter a price"
    }
});

module.exports = mongoose.model('Product', ProductSchema);