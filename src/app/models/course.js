const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Course = new Schema({
   
    title: {type:String ,maxLenght:50},
    img: {type:String },
    video:{type: String},
    slug:{type:String },
    mota:{type:String ,maxLenght:50},
    createdAt:{type:Date, default:Date.now},
     updatedAt:{type:Date, default:Date.now},
 });

 module.exports =mongoose.model('Course',Course);