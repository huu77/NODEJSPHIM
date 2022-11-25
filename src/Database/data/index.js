const mongoose = require('mongoose');

  async  function connect(){
          try {
           const  db = "mongodb://127.0.0.1:27017/my_databases";// ko nen  "mongodb://localhost:27017/my_databases"
             await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
          
            console.log("ket noi thanh cong");
          } catch (error) {
            console.log("ket noi that bai");

          }
 }
module.exports ={ connect } ;