const express = require("express");
const sqlite3 = require("sqlite3");
const cors = require("cors");
const db = new sqlite3.Database("./database.db");

const app = express();
app.use(cors());
app.use(json());


app.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000")
})