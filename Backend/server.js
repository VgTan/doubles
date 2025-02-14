const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost", 
    user: 'root', 
    password: '', 
    database: 'doubles'
});

app.get('/', (re, res)=> {
    return res.json("From Backend");
})

app.post('/users', (req, res) => {
    const { name, email, password, roles } = req.body;

    if (!name || !email || !password || !roles) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = "INSERT INTO users (name, email, password, roles) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, password, roles], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.status(201).json({ message: "User added successfully" });
    });
});


app.get('/users', (req, res)=> {
    const sql = "SELECT * FROM users"
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8010, ()=> {
    console.log("Listening");
})
