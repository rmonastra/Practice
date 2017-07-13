const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const dataSchema = new Schema({
    exercise: []     
  });

  const dataBase = mongoose.model('dataBase', dataSchema);

  module.exports = dataBase;