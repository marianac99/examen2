const path = require('path')
const Carta = require('../utils/database').models.cards


exports.postAgregarCarta = (req, res)=>{
    console.log(req.body)

    Carta.create(req.body)
    .then(result=>{
        console.log("Carta agregada exitosamente")
        res.json({
            estado: "aceptado"
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            estado: "error"
        })
    })
    
    
}


exports.getObtenerCarta = (req, res)=>{
    Carta.findAll()
    .then(cartas =>{
        console.log(cartas)
        res.json(cartas)
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            estado: "error"
        })
    })
    
}

