//Our Favorite Albums
// Andrew Fisher
// Brooke Woodland
// Jake Evans
// Johnny Paulsen

//Configure environment Variables:
require('dotenv').config();

//Extract Environment Variables
const ENV_VARIABLES = {
    dbHost: process.env.DATABASE_HOST,
    dbUser: process.env.DATABASE_USER,
    dbPassword: process.env.DATABASE_PASSWORD,
    dbName: process.env.DATABASE_NAME
}

//Define Knex Database Connection
const knex = require("knex")({
    client: "mysql",   //Alternatively  for postgres use: client: "pg",
    connection: {
        host : ENV_VARIABLES.dbHost,
        user : ENV_VARIABLES.dbUser,
        password : ENV_VARIABLES.dbPassword,
        database : ENV_VARIABLES.dbName,
        port: 5432
    }
});

//Define Constants:
const path = require("path");
const port = 3000;

//Define + Configure Express:
let express = require('express');
let app = express();

//Define Static File Directory
app.use(express.static("content"))

//Setup Form Access
app.use(express.urlencoded({extended: true}));

//Define EJS Engine/Location
app.set("view engine", "ejs");

console.log("Server Started");

//Define Routes:
app.get("/", (req, res) => {
    res.render("index")
})


//Activate Listener
app.listen(port, () => console.log("Listening Active, Server Operational"));
console.log("Starting development server at http://localhost:" + port)