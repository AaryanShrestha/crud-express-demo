const express = require ('express');
require('./config/databaseConfig')
const appRouter = require ('./router/router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', appRouter);

app.listen(3000, (req, res, next) => {
    console.log("server connected")
});


