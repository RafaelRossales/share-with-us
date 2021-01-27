const { authSecret } = require('../.env');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');

module.exports = app =>{

    const signin =async (req,res) =>{
        if(!req.body.email || ! req.body.password)
        {
            return res.status(400).send('Informe o usuário e senha!')
        }

        const user = await app.db('users')
        .where({email:req.body.email})
        .first()

        if(!user) return res.status(400).send('Usuario nao encontrado!')

        //Comparando senha
        const isMatch = bcrypt.compareSync(req.body.password,user.password)

        if(!isMatch) return res.status(401).send('Email/Senha não sao validos!')


        //Definindo Validade do token
        const now = Math.floor(Date.now() / 1000)

        // Valores que vão compor o token
        //iat = issued at ....
        const payload ={
            id:user.id,
            name:user.name,
            email:user.email,
            admin:user.admin,
            iat:now,// Data de emissão
            exp: now + (60 * 60 * 24 * 3) // Definindo a validade do token para 3 dias a contar de sua geração
        }
        //Gerando Token
        res.json({
            ...payload,
            toke:jwt.encode(payload,authSecret)
        })
    }
    const validateToken = async (req,res) =>{
        const userData = req.body || null;
        try{
            if(userDate){
                const token = jwt.decode(userData.token,authSecret)

                if(new Date(toke.exp * 1000) > new Date()){
                    return res.send
                }
            }
        }catch(e){

        }
        res.send(false)
    }

    return {signin,validateToken}
}
