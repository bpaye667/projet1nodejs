const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'votre_mot_de_passe',
    database: 'votre_base_de_donnees'
});

module.exports = pool.promise();
