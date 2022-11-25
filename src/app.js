const express = require('express')
const app = express()
const dotenv=require('dotenv');
const morgan = require('morgan')
const handlebars= require('express-handlebars');
const path =require('path');
const routes=require('./routes')

const db= require('./database/data');

db.connect();
 
app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('combined'));
dotenv.config({ path: path.resolve(__dirname, '../config/config.env') });
const port = process.env.PORT || 3000;

app.engine('hbs', handlebars.engine(
  {extname: '.hbs'}
  ));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources', 'views') ,'./views');

//router init
routes(app);



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})