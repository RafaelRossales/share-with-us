module.exports = app =>{
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)
        
    //Alterar usuario
    app.route('/users/:id')
        .put(app.api.user.save)
}