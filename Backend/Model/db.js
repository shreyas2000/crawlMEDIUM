const mysql = require("mysql2")

const pool = mysql.createPool({
    hosts: "localhost",
    user: "root",
    database: "mediumarticles",
    password: "Shreyasp@24",
})

module.exports = pool.promise();