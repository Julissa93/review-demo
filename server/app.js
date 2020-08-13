const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 8080;
const path = require('path')
const {db, Cat, Owner} = require('../db')

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    res.send('<h1>Welcome to the main route!</h1>')
})

app.get('/cats', async (req, res, next) => {
    try {
        //How can we retrieve the owners that are associated with each cat???
        const cats = await Cat.findAll(); 
        res.send(cats);
    } catch (err) { 
        next(err);
    }
})

app.get('/owners', async (req, res, next) => {
    try {
        const owners = await Owner.findAll()
        res.send(owners);
    } catch (err) {
        next(err);
    }
})

//Express comes with a built-in error handler that we will explore here
//But, first let's start with errors we should handle: 
//400 level errors - 404
//500 level errors - 500/502



app.listen(PORT, () => console.log(`Server is listening on ${PORT}`))