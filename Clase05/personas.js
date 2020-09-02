let sql = require("mssql")

const config = {
    user: "sa",
    password: "sa2K17docker",
    server: "localhost",
    database: "prueba"
}

async function agregar(nueva) {
    let nuevoId = 0
    try {
        
        await sql.connect(config)
        
        const resultadoInsert = await sql.query`insert into personas values (${nueva.nombre},${nueva.apellido},20,1)`

        if (resultadoInsert.rowsAffected[0] > 0) {
            const resultado = await sql.query('select @@identity as nuevoId')
            nuevoId = resultado.recordset[0].nuevoId
        }

        sql.close()
        console.log("Cantidad de filas " + resultado.rowsAffected[0])
    }
    catch(err) {
        console.log(err)
    } 

    return nuevoId
}

async function consultar() {

    let personas = []
    try {
        await sql.connect(config)
        const resultado = await sql.query('select id as codigo, nombre , apellido from personas')        

        sql.close()
        console.log("Cantidad de filas " + resultado.rowsAffected[0])
        personas = resultado.recordset
    }
    catch(err) {
        console.log(err)
    }

    return personas
}

async function obtener(id) {

    let persona = null 

       try {
        
        await sql.connect(config)
        
        const resultado = await sql.query`select * from personas where id = ${id}`

        sql.close()
        console.log("Cantidad de filas " + resultado.rowsAffected[0])
        if (resultado.rowsAffected[0] > 0)
            persona = resultado.recordset[0]
    }
    catch(err) {
        console.log(err)
    } 

    return persona
}

exports.agregar = agregar
exports.consultar = consultar
exports.obtener = obtener