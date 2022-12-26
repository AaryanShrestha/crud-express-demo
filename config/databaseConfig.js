const mongoose = require ('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1/shop', ({useUnifiedTopology: true, useNewUrlParser: true}, err => {
    if(!err){
        console.log("database connected");
    }else{
        console.log(err);
    }
}));

