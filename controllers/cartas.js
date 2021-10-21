const path = require('path')
const Carta = require('../utils/database').models.cartas

function esPaloValido(xpalo){
    return (xpalo === "Diamantes" || xpalo==="Corazones" || xpalo === "Treboles" || xpalo === "Picas")
}

function esColorValido(xcolor){
    return (xcolor ==="Rojo" || xcolor === "Negro")
}

function esNumeroValido (xnumero){
    return (xnumero === "2" || xnumero === "3" || xnumero === "4"|| xnumero === "5"|| xnumero === "6"
    || xnumero === "7"|| xnumero === "8"|| xnumero === "9"|| xnumero === "10"|| xnumero === "J"
    || xnumero === "Q"|| xnumero === "R")
}


function esRepetido (xnumero,xcolor,xpalo){
    
    count = 0
    Carta.findAll({
        where:{
            palo: xpalo,
            numero: xnumero,
            color: xcolor
        }
    }).then(count += 1)

    return count
}

exports.postAgregarCarta = (req, res)=>{
    console.log(req.body)
    
    
    if (esPaloValido(req.body.palo) && esColorValido(req.body.color) && esNumeroValido(req.body.numero) && !esRepetido (req.body.numero,req.body.color,req.body.palo) , 1)
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
     else
     res.json({
        estado: "no valido"
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

