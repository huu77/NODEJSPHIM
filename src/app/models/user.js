const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
   
    name: {type:String ,maxLenght:50},
   password:{type:String ,maxLenght:50},
    createdAt:{type:Date, default:Date.now},
     updatedAt:{type:Date, default:Date.now},
 });

 module.exports =mongoose.model('User',User);