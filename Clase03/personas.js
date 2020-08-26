let personas = []

function agregar(nueva) {
    personas.push(nueva)
}

function consultar() {
    return personas
}

exports.agregar = agregar
exports.consultar = consultar
