// // 
// var faker = require("faker")
// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties
// //console.log(faker())
// console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
// console.log(faker.fake("{{helpers.createCard}} ")) ;

 var faker = require("faker") 
 var randomProductName = faker.commerce.productName() ;
 var randomPrice = faker.commerce.price() ;
 for(i=0;i<10 ; i++){
 console.log(ProductName,"-",Price) }
 //console.log(Price)
