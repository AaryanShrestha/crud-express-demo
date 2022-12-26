const mongoose = require('mongoose');
const Users = require('./Users');
const Products = require ('./Products');
const Reviews = require ('./Reviews');

const OrderSchema = new mongoose.Schema({
    orderDetail: {
        type: String,
        required: false
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Products",
            required: true
    },
    userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
            required: true
    },
    reviewId: {

            type: mongoose.Schema.Types.ObjectId,
            ref: "Reviews"
    }
});


module.exports = mongoose.model("Orders", OrderSchema);