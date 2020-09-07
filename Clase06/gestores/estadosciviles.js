let sql = require("mssql")
const {config} = require('./db')

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
        const resultado = await sql.query('select e.nombre, count(*) as cantidad from personas p inner join estadosciviles e on p.idestadocivil = e.id group by e.id, e.nombre')        

        sql.close()
        console.log("Cantidad de filas " + resultado.rowsAffected[0])
        personas = resultado.recordset
    }
    catch(err) {
        console.log(err)
    }

    return personas
}

exports.obtenerEC = consultarEC
exports.contarPersonasPorEC = contarPersonasPorEC