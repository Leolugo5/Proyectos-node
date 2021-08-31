//ESATA ES UNA PRUEBA PARA SABER SI SE ACTUALIZO MI REPO

//Imports de los módulos
const fs = require("fs/promises");
const path = require("path");

const readFileUsers = () => {
    const usersPath = path.resolve("./users.json");
    try {
        const data = fs.readFile(usersPath, "utf8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

const writeHelloWorld = () => {
    const helloPath = path.resolve("./hello.txt");
    try {
        fs.writeFile(helloPath, "hello world!");
    } catch (error) {
        console.log(error);
    }
};

const addUser = async (username) => {
    const usersPath = path.resolve("./users.json");
    try{
        const data = await fs.readFile(usersPath, "utf8");
        const users = JSON.parse(data);
        users.push(username);
        await fs.writeFile(usersPath, JSON.stringify(users));
    } catch(error){
        console.log(error);
    }
};
module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};

