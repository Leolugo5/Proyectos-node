const fs = require("fs");

fs.readFile("saludo.txt", { encoding: 'utf-8' }, (err, data) => {
    if (!err) {
        let content = data;
        content = content.replace("Leonardo", "Jafet");
        fs.writeFile("saludo.txt", content, (err) => {
            if (!err) {
                console.log("se cambio el nombre")
            }
        })

    }
})