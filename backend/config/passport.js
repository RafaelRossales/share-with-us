const { authSecret } = require('../.env')
const passport = require('passport')
const passaportJWT = require('passport-jwt')
const { Strategy, ExtractJwt } = passaportJWT

module.exports = app =>{
    const params ={
        secretOrKey: authSecret, // segredo
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()//Token
    }

    const strategy = new Strategy (params, (payload,done) =>{
        app.db('users')
        .where({id:payload.id})
        .first()
        .then(user => done(null,user ? {...payload} : false))
        .catch(err => done(err,false))
    })


    passport.use(strategy)

    return {
        authenticate : () => passport.authenticate('jwt',{session : false})
    }
}