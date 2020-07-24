/*=============================================================================
 * Authors: Agustin Bassi, Brian Ducca, Santiago Germino 
 * Date: Jul 2020
 * Licence: MIT
 * Project: DAW - CEIoT - Project Structure
 * Brief: MySQL Connector to DB server at specified settings
=============================================================================*/

//=======[ Settings, Imports & Data ]==========================================

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'mysql-server',
    port     : '3306',
    user     : 'root',
    password : 'userpass',
    database : 'smart_home'
});

//=======[ Main module code ]==================================================

connection.connect(function(err) {
    if (err) {
        console.error('Error while connect to DB: ' + err.stack);
        return;
    }

    console.log('Connected to DB under thread ID: ' + connection.threadId);
});

module.exports = connection;

//=======[ End of file ]=======================================================
