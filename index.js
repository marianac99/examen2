const express = require ("express")
const path = require("path")
const vjRoutes = require('./routes/cartas')
const sequelize = require('./utils/database')
const app = express()


//Configurar el servidor y que sepa que es un Json
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use( "/cartas",vjRoutes);


app.get("/prueba", (req, res) =>{
    res.send("Prueba del servidor funcianando")

})

//Que la aplicación escuche peticiones
sequelize.sync()
    .then(()=>{
        app.listen(8081,()=>{
            console.log("Aplicación web en línea en el puerto 8081")
    })
    })
    .catch(err=>console.log(err))







