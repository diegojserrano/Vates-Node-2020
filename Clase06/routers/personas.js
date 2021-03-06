let express = require('express')
let bodyParser = require('body-parser')

let personas = require("../gestores/personas")
let app = express.Router()

app.use(bodyParser.urlencoded({ extended: false }))

app.post("/:nombre/:apellido", async (req,res) => {
    const nuevaPersona = { nombre: req.params.nombre.trim(), apellido: req.params.apellido.trim()} 
    if (!nuevaPersona.nombre || !nuevaPersona.apellido)
    {
        res.status(400)
    }
    else {
        const id = await personas.agregar(nuevaPersona)
    // si los datos no validan bien, devolver 400
    // si hay una clave autonumerica devolver un 301
        res.status(301)
        res.setHeader("Location",`/personas/${id}`)
    }
    res.end()
})

//app.post("/personas", (req,res) => {
//    const nuevaPersona = { nombre: req.query.nombre, apellido: req.query.apellido } 
//    personas.agregar(nuevaPersona)
//    res.end(`Nombre ${nuevaPersona.nombre} agregado correctamente`)
//})

app.post("/", (req,res) => {
    const nuevaPersona = { 
        nombre: req.body.nombre, 
        apellido: req.body.apellido,
        idEstadoCivil: req.body.idestadocivil
    } 
    console.log(nuevaPersona)
    console.log(req.body)
    personas.agregar(nuevaPersona)
    res.status(201)
    res.end()
})

app.get("/", async (req,res) => {
    const resultado = await personas.consultar()
    res.setHeader("Content-Type","application/json")
    res.end(JSON.stringify(resultado))
})


app.get("/:codigopersona", async (req, res) => {
    const resultado = await personas.obtener(req.params.codigopersona)
    res.setHeader("Content-Type","application/json")
    if (resultado) {
        res.end(JSON.stringify(resultado))
    } else {
        res.status(404)
        res.end()
    }
})

app.delete("/:id", (req, res) => {
    res.status(501)
    res.end()

}) 

exports.router = app