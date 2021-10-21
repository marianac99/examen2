//Representa a la biblioteca sequelize
const Sequelize = require("sequelize")

//Objeto de Conexion
const sequelize= new Sequelize('BluesDB','user2','root',{
    dialect: 'mysql',
    host: '54.234.54.143', //Direccion IP
    define:{
        //No coloques createdAt y updateAt
        timestamps:false,
        //Evitar plural
        freezeTableName: true
    }
})

//Cargar todos los modelos
const modelDefiners = [
    //importar cada modelo dentro de la carpeta models
    require('../models/cartas'),
    
]

//Adherir al objeto de conexion
for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}


//Para poder usar en archivo externos la conexion
module.exports = sequelize;