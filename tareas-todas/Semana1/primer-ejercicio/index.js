//Imports de los módulos
const fs = require("fs/promises");
const path = require("path");

const readFileUsers = () => {
    //Imprimir en consola el arreglo de usuarios nota extra
    const usersPath = path.resolve("./users.json");
    try {
        const data = fs.readFile(usersPath, "utf8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

const writeHelloWorld = () => {
    //Escribir hello world! en el archivo hello.txt
    const helloPath = path.resolve("./hello.txt");
    try {
        fs.writeFile(helloPath, "hello world!");
    } catch (error) {
        console.log(error);
    }
};

const addUser = async (username) => {
    //Agregar un usuario en la lista users.json
    const usersPath = path.resolve("./users.json");
    try{
        const data = await fs.readFile(usersPath, "utf8");
        const users = JSON.parse(data); //Convertir de JSON a objeto
        users.push(username);
        await fs.writeFile(usersPath, JSON.stringify(users));
    } catch(error){
        console.log(error);
    }
};

//No hace falta ejecutar las funciones

module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};
