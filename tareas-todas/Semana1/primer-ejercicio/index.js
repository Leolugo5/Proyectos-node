// modulos core de node.js

//https (para crear un servidor o hacer peticiones)
//fs (para manejo de archivos)
//path (para construccion de rutas hacia archivos o directorios)
//events (para manejo de eventos)
//----------------------------------------------------------------
//importtar un modulo en node.js
// const modulo = require('modulo')

const fs = require('fs')

//l¿Leer archivos con fs (Asincrono)

fs.readFile("saludo.txt", { encoding: "utf-8" }, (err, data) => {
    if (!err) {
        console.log(data)
    } else {
        console.log(err)
    }
})


const data = fs.readFileSync("saludo.txt", { encoding: "utf-8" }) //Sincrono
console.log(data)

// Sobre-escribe el contenido de frma Asincrona
fs.writeFile("saludo.txt", "Aqui nomas probando 123, 123", (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Escritura en el archivo completa")
    }
})


// Agrega contenido al archivo de forma Asincrona
fs.appendFile("saludo.txt", "esto es para agregar datos al archivo", (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Escritura en el archivo completa")
    }
})