const app = require('express')();
const consign = require('consign');
const db = require('./config/db');
const mongoose = require('mongoose')
require('./config/mongo.js')

app.db = db // Knex (Instancia do banco de dados)
app.mongoose = mongoose // Instancia do mongoose

//Arquivos de configuração
consign()
.include('./config/passport.js')
.then('./config/middleware.js')
.then('./api/validator.js')
.then('./api')
.then('./schedule/statsSchedule.js')
.then('./config/routes.js')
.into(app)

app.listen(3305,()=>{
    console.log('BackEnd Executando....')
})