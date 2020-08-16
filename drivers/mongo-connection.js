const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/series';

const db = mongoose.connect(mongoUrl,{useNewUrlParser: true},(error) => {
 if (error){
    console.log('Error conectando a Mongo');
 }else{
    console.log('Connect Success');
 }
});

module.exports = db;