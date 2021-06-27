var mongoose = require('mongoose');
// const { precompileString } = require('nunjucks');

var goodsSchema = new mongoose.Schema({
    id: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        default: null
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    seller: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    releaseTime: {
        type: Date,
        default: new Date()
    }
})

var Goods = mongoose.model('Goods', goodsSchema);
module.exports = { Goods };