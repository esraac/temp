//MODULES
const names=require('./names-modules');
const sayHi=require('./sayHi-modules');

//console.log(names);
sayHi("susan")
sayHi(names.john)
sayHi(names.peter)

const data=require("./alternativeFlavor")
console.log(data)

require("./mind.grenade")