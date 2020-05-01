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

//1 to many relationship between cats and owners
/*Cat.belongsTo(Owner); //set that Foreign Key on the cats table
Owner.hasMany(Cat)*/

//Many to Many
Cat.belongsToMany(Owner, {through: 'cats_owners'});
Owner.belongsToMany(Cat, {through: 'cats_owners'});

//instance methods && class methods

Cat.prototype.sayHello = function () { //instance method
    console.log(`${this.name} says meow`);
}

//class method
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