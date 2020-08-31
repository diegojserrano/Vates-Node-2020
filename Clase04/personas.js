let personas = []

function agregar(nueva) {
    personas.push(nueva)
}

function consultar() {
    return personas
}

function obtener(id) {
    return personas[id]
}

exports.agregar = agregar
exports.consultar = consultar
exports.obtener = obtener