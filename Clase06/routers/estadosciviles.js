let express = require('express')
let bodyParser = require('body-parser')
let personas = require("../gestores/estadosciviles")

let app = express.Router()


app.get("/", async (req,res) => {
    const resultado = await personas.obtenerEC()
    res.setHeader("Content-Type","application/json")
    res.end(JSON.stringify(resultado))
})

app.get("/cantidad", async (req,res) => {
    const resultado = await personas.contarPersonasPorEC()
    res.setHeader("Content-Type","application/json")
    res.end(JSON.stringify(resultado))
})

exports.router = app