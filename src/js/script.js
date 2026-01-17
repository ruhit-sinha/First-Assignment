const express = require('express');
const app = express();
const PORT = 3000;

// Middleware: Taaki hum JSON data samajh sakein
app.use(express.json());

// 1. GET API: Jab koi website par aaye (Reading data)
app.get('/api/hello', (req, res) => {
    res.send({ message: "Hello! Aapki pehli API chal rahi hai." });
});

// 2. POST API: Jab koi data bheje (Sending data)
app.post('/api/user', (req, res) => {
    const username = req.body.name;
    res.send({ status: "Success", message: `User ${username} ka data mil gaya!` });
});

// Server ko start karna
app.listen(PORT, () => {
    print(`Server chal raha hai: http://localhost:${PORT}`);
});