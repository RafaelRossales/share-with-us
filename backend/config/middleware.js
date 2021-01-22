const bodyParser = require('body-parser');
const cors = require('cors');

// Auxilia na criação de dependencias da aplicação

module.exports = app =>{
    app.use(bodyParser.json())
    app.use(cors())
}