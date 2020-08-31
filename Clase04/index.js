let express =  require("express")
let personas = require("./personas")
let bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => { res.end("Hola!")  } )

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
    res.setHeader("Content-Type","application/json")
    res.end(JSON.stringify(personas.consultar()))
})

app.get("/obtener/:codigopersona", (req, res) => {
    res.setHeader("Content-Type","application/json")
    res.end(JSON.stringify(personas.obtener(req.params.codigopersona)))
})


app.listen(8000)

