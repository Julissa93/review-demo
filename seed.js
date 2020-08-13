const { db, Cat, Owner } = require("./db");

const seed = async () => {
  await db.sync({ force: true });
  console.log("db is synced");

  //cats
  const cat1 = await Cat.create({ name: "Bella", age: 1 });
  const cat2 = await Cat.create({ name: "Cat 2", age: 2 });
  const cat3 = await Cat.create({name: "Cat 3", age: 5,});

  //owners
  const owner1 = await Owner.create({name: "Owner1"});
  const owner2 = await Owner.create({name: "Owner2"});
  const owner3 = await Owner.create({name: "Owner3"});

  console.log('magic methods', cat1.__proto__); //displays magic methods!!!
  //How to set foreign key values -> Use magic methods! 
  //cat1.setOwner(owner1); 
  //cat2.setOwner(owner2);
  //cat3.setOwner(owner3);

};

seed();
