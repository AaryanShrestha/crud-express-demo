const Order = require('../model/Orders');

const postOrder = (req, res, next) => {
    const newOrder = req.body;
    try {
        const order = new Order(newOrder).save();
        res.json({message: order, state: "Posted sucessfully."});
    } catch (err) {
        console.log(err);
    }
};

const getOrder = (req, res, next) => {
    try {
        const order = Order.find();
        res.json({message: order});
    } catch (err) {
        console.log(err);
    }
};

const getOneOrder = (req, res, next) => {
    try {
        const order = Order.findById(req.params.id);
        res.json({message: product});
    } catch (err) {
        console.log(err);
    }
};

const updateOrder = (req, res, next) => {
    
};

const deleteOrder = (req, res, next) => {
    try {
        const order = Order.findByIdAndDelete(req.params.id);
        res.json({message: order, state: "deleted sucessfully."})
    } catch (err) {
        console.log(err);
    }
};

module.exports = {postOrder, getOrder, getOneOrder, updateOrder, deleteOrder};