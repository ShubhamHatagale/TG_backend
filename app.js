 const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database')
const router = express.Router();

				
  const routes = require('./routes/index');
  const PORT = process.env.PORT;

  const app = express();

 app.use(bodyParser.json()); // application/json
//hhh
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *');
    // res.setHeader('Access-Control-Alow-Headers', 'Content-Type, Authorization');
    // res.setHeader('Content-Type', 'text/json')
    next();
});

app.use('/masters', routes(router))
sequelize.sync().then(result => {
    app.listen(PORT);
    console.log(PORT);
}).catch(err => {
    console.log(err)
})



