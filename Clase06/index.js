let express =  require("express")
let routerPersonas = require('./routers/personas')
let routerEC = require('./routers/estadosciviles')

let app = express()

// Routers
app.use("/personas", routerPersonas.router)
app.use("/estados", routerEC.router)

app.listen(8000)


