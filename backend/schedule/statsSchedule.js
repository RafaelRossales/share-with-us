const schedule = require('node-schedule')

// Arquivo de agendamento
// A cada 1 minuto será realizada uma consulta na 
//base de dados relacional que retornará as estatiticas dos 
// daddos armazenados 
module.exports = app =>{
    schedule.scheduleJob('*/1****',async function(){
        // 
        const userCount = await app.db('users').count('id').first()
        const cateroriesCount = await app.db('categories').count('id').first()
        const articlesCount = await app.db('articles').count('id').first()

        const { Stat } = app.api.stat
        const lastStat = await Stat.find({},{},{sort:{'createdAt':-1}})

        const stat = new Stat({
            users:userCount.count,
            categories:cateroriesCount.count,
            articles:articlesCount.count,
            createdAt: new Date()
        })

        // Compara as a nova estatistica com a ultima estatistica do banco de dados
        // Se houver alteração será persistido a nova estatistica caso contrário 
        // permanecerá a atual.

        const changeUsers = !lastStat || stat.users !== lastStat.users;
        const changeCategories = !lastStat || stat.categories !== lastStat.categories;
        const changeArticles = !lastStat || stat.articles !== lastStat.articles;

        if(changeUsers || changeArticles || changeCategories)
        {
            stat.save().then(() => console.log('[Stat] Estatísticas Atualizadas!'))
        }

    })
}