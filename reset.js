const fs=require('fs');

let usuarios={
    usuarios: []
}
let comentarios={
    comentarios:[]
}

fs.writeFileSync('./db/usuarios.json', JSON.stringify(usuarios), 'utf8')
fs.writeFileSync('./db/comentarios.json', JSON.stringify(comentarios), 'utf8')