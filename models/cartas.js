const Sequelize = require("sequelize")

const Carta = (sequelize)=>{
    sequelize.define('cartas',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        numero:{
            type:Sequelize.STRING(30),
            allowNull:false
        },
        color:{
            type:Sequelize.STRING(30),
            allowNull:false
        },
        palo:{
            type:Sequelize.STRING(30),
            allowNull:false
        }
    })
}

module.exports = Carta