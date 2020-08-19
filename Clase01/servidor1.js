var http = require ('http')
const { read } = require('fs')


let visitas = 0

// createServer requiere un parámetro
// ese parámetro debe ser una función llamada callback
http.createServer((req, res) => {
    if (req.url == "/contar") {
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






