const dataBase = require('./db');
const saveOrphanage = require('./saveOrphanage')


dataBase.then(async db => {

    //inserir dados na tabela

    //await saveOrphanage(db, {


    //})


    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //Consultar apenas um orfanato pelo ID

    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    //console.log(orphanage)

    //deletar dado da tabela

    //await db.run("DELETE FROM tabela WHERE id='4'")

})
