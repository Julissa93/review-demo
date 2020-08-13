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

//Sequelize Docs for Associations: https://sequelize.org/master/manual/assocs.html
//1 to many relationship between cats and owners
/*Cat.belongsTo(Owner); //set that Foreign Key on the cats table
Owner.hasMany(Cat)*/

//Many to Many
Cat.belongsToMany(Owner, {through: 'cats_owners'});
Owner.belongsToMany(Cat, {through: 'cats_owners'});

//Instance methods && Class methods
//A convenient way to add functionality to your Sequelize models
//REMEMBER: It's just JavaScript so we can add functions to the constructor function or its prototype. 

Cat.prototype.sayHello = function () { //instance method
    console.log(`${this.name} says meow`);
}

//class method
//In Sequelize we use special properties called "operators" to apply specific comparisions like "greater than" or "less than"
//Docs: https://sequelizedocs.fullstackacademy.com/search-operators/
//Important Note: Using the $ sign operators are deprecated in the new version of Sequelize 
//so we have to use Sequelize's `Sequelize.Op` module
Cat.getKittens = async function () {
    const kittens = await Cat.findAll({
        where: {
            age: {[Op.lte]: 3}
        }
    })
    return kittens;
}

module.exports = {
    db, Cat, Owner
}