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
        
        const resultadoInsert = await sql.query`insert into personas values (${nueva.nombre},${nueva.apellido},20,${nueva.idEstadoCivil})`

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
        const resultado = await sql.query('select p.id as codigo, p.nombre , apellido, e.nombre as estadocivil from personas p join estadosciviles e on p.idestadocivil = e.id')        

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


async function consultarEC() {

    let personas = []
    try {
        await sql.connect(config)
        const resultado = await sql.query('select id , nombre from estadosciviles')        

        sql.close()
        console.log("Cantidad de filas " + resultado.rowsAffected[0])
        personas = resultado.recordset
    }
    catch(err) {
        console.log(err)
    }

    return personas
}


async function contarPersonasPorEC() {

    let personas = []
    try {
        await sql.connect(config)
        const resultado = await sql.query('select e.nombre, count(*) from personas p inner join estadosciviles e on p.idestadocivil = e.id group by e.id, e.nombre')        

        sql.close()
        console.log("Cantidad de filas " + resultado.rowsAffected[0])
        personas = resultado.recordset
    }
    catch(err) {
        console.log(err)
    }

    return personas
}

exports.agregar = agregar
exports.consultar = consultar
exports.obtener = obtener
exports.obtenerEC = consultarEC
exports.contarPersonasPorEC = contarPersonasPorEC