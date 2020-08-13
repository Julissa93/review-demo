const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = new Sequelize("postgres://localhost:5432/demo");

const Cat = db.define('cats', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
})

const Owner = db.define('owners', {
    name: Sequelize.STRING
})

//Question: How do we make a 1 to 1 and a 1 to many relationship in Sequelize?
//Where should our foreign key that connects Owners and Cats live?

//1 to 1 relationship between cats and owners

//1 to many relationship between cats and owners

//Many to Many

//Class Methods && Instance Methods
//A convenient way to add functionality to your Sequelize models
//REMEMBER: It's just JavaScript so we can add functions to the constructor function or its prototype. 


module.exports = {
    db, Cat, Owner
}