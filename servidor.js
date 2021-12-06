const express = require('express');
const app = express();
const fs = require('fs');

const PORT = 8080;

const todo = getAll()
console.log(todo);

const server = app.listen(PORT, () => {
    console.log(`servidor http escuchando en el puerto ${server.address().port}`);
});

server.on("error", error => console.log(`Error en el servidor ${error}`));


app.get('/productos', (req, res) => {
    res.send(todo);
})

app.get('/productoRandom', (req, res) => {
    res.send(todo[Math.floor(Math.random() * todo.length)]);
})


function getAll() {
    const contenido = fs.readFileSync(`./productos.txt`, 'utf-8')
    const all = JSON.parse(contenido)
    return all
}