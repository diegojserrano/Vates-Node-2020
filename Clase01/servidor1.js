var http = require ('http')
const { read } = require('fs')


let visitas = 0
let nombres = []

// createServer requiere un parámetro
// ese parámetro debe ser una función llamada callback
http.createServer((req, res) => {
    if (req.url.startsWith("/agregar/")) {
        let nombre = req.url.split("/")[2]
        nombres.push(nombre)
        req.url
        res.end("Nombre " + nombre + " agregado correctamente")
    }

    
    else if (req.url == "/listar") {
        let table = "<table border=1>"
        for (let i = 0; i < nombres.length; i++) 
            table += "<tr><td>" + nombres[i] + "</td></tr>"
        table += "</table>"
        res.end(table)
    }
    else if (req.url == "/contar") {
        visitas++
        res.end("contado correctamente")
    }
    else if (req.url == "/consultar") {
        res.end("<h1>Hola!, van " + visitas + " </h1>")
    }
    else 
        res.end("ERROR")

    console.log("recibi una peticion nueva")

}).listen(8000)






