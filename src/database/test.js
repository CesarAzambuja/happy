const Datebase = require('./db');
const saveOrphanage = require('./saveOrphanage');

Datebase.then( async db => {
    // Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-23.9586152",
        lng: "-46.345536",
        name:"Analia Franco",
        whatsapp:"13 9 9999-9999",
        about: 'Presta assistência a criaças de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social.',
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6ohL9oKpqKFJXrReumc-Nxtu_9KjP3OylaA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6TlF-i2QLq-rwKTbygPw1-I2uNJMKIlrkdA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9wddC8n8kZtwmuFjsvVrkbC1fCsu2Oj3UTg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaaPHL39vV2YfHkITf8q1RGMFKl9RmgghiEA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLrMxgufc03U5G7DleVXCfMtSLUBJyn2Aw8g&usqp=CAU"
        ].toString(),
        instruction: "Venha pode ser sentir a vontage e traga muito amor e paciência para dar.",
        opening_hours:"Horários de visitas Das 8h até as 18h",
        open_on_weekends: "1"
    }) 

    // Consulta dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM  orphanages")
    console.log(selectedOrphanages)

    //Consultar somente 1 orfanata to pelo ID
    const selectedOrphanage = await db.all("SELECT * FROM orphanages WHERE id = 3")
    console.log(selectedOrphanage)

    // Deletar algum dado da tabela 
   /*console.log(await db.run("DELETE FROM orphanages WHERE ID= 3")) */

})