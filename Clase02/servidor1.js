var http = require ('http')
const { read } = require('fs')
const { fileURLToPath } = require('url')


let visitas = 0
let nombres = []

// createServer requiere un parámetro
// ese parámetro debe ser una función llamada callback
http.createServer((req, res) => {
    if (req.url.startsWith("/agregar/")) {
        let nombre = req.url.split("/")[2]
        nombres.push(nombre)
        res.end("Nombre " + nombre + " agregado correctamente")
    }
    else if (req.url == "/listar") {
        let filas = w.reduce((x,y) => x+`<tr><td>${y}</tr></td>`, '') 
        res.end(`<table>${filas}</table>`)
    }
    else if (req.url == "/contar") {
        visitas++
        res.end("contado correctamente")
    }
    else if (req.url == "/consultar") {
        res.end(`<h1>Hola!, van ${visitas} </h1>`)
    }
    else 
        res.end("ERROR")

    console.log("recibi una peticion nueva")

}).listen(8000)






