let express =  require("express")
let personas = require("./personas")
let bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => { res.end("Hola!")  } )

app.get("/agregar/:nombre/:apellido", async (req,res) => {
    const nuevaPersona = { nombre: req.params.nombre, apellido: req.params.apellido } 
    const id = await personas.agregar(nuevaPersona)
    res.end(`Nombre ${nuevaPersona.nombre} agregado correctamente, con id= ${id}`)
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

app.get("/listar", async (req,res) => {
    const resultado = await personas.consultar()
    res.setHeader("Content-Type","application/json")
    res.end(JSON.stringify(resultado))
})

app.get("/obtener/:codigopersona", async (req, res) => {
    const resultado = await personas.obtener(req.params.codigopersona)
    res.setHeader("Content-Type","application/json")
    res.end(JSON.stringify(resultado))
})

app.listen(8000)

