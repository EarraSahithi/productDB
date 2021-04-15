const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const infoSchema=new Schema({
    productName:String,
    price:String
},
{ 
    collection  :"information",
}
);

module.exports=mongoose.model('information',infoSchema);