let express =  require("express")
let personas = require("./personas")
let contador = require("./contador")
let bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => { res.end("Hola!")  } )

app.get("/contar", (req, res) => {  
    contador.contar()    
    res.end("Visitante contado correctamente")
} )

app.get("/consultar", (req, res) => {  
    res.end(`Se registraron ${contador.cantidad()} visitas`)    
} )

app.get("/agregar/:nombre/:apellido", (req,res) => {
    const nuevaPersona = { nombre: req.params.nombre, apellido: req.params.apellido } 
    personas.agregar(nuevaPersona)
    res.end(`Nombre ${nuevaPersona.nombre} agregado correctamente`)
})

app.get("/agregar", (req,res) => {
    const nuevaPersona = { nombre: req.query.nombre, apellido: req.query.apellido } 
    personas.agregar(nuevaPersona)
    res.end(`Nombre ${nuevaPersona.nombre} agregado correctamente`)
})

app.post("/agregar", (req,res) => {
    const nuevaPersona = { nombre: req.body.nombre, apellido: req.body.apellido } 
    personas.agregar(nuevaPersona)
    res.end(`Nombre ${nuevaPersona.nombre} agregado correctamente`)
})

app.get("/listar", (req,res) => {
    let filas = personas.consultar().reduce((x,y) => x+`<tr><td>${y.nombre}</td><td>${y.apellido}</td></tr>`, '') 
    res.end(`<table>${filas}</table>`)
})

app.listen(8000)

