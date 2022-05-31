const { Client } = require('pg')
require("dotenv").config();

class Connection{

    static dataBaseConnection(){
        const connectionData = {
            user: process.env.user,
            host: process.env.host,
            database: process.env.database,
            password: process.env.password,
            port: process.env.port,
        }
        
        const client = new Client(connectionData);
        return client; 
    }
}

module.exports = Connection;
