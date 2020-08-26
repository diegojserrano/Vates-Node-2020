let visitas = 0

function contar() { visitas++ }

function cantidad() { return visitas}

exports.contar = contar 
exports.cantidad = cantidad