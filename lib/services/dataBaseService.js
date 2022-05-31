const Connection = require("./../utils/connection");

class DataBaseService{
    
    static getAllTable(tableName){
        const client = Connection.dataBaseConnection();
        client.connect()
        return client.query(`SELECT * FROM ${tableName}`)
            .then(response => {
                client.end()
                return response.rows;
            })
            .catch(err => {
                client.end()
                return err;
            })
    }

    static getExplorerById(tableName, id){
        const client = Connection.dataBaseConnection();
        client.connect();
        return client.query(`SELECT * FROM ${tableName} where id = ${id}`)
            .then(response => {
                client.end()
                return response.rows;
            })
            .catch(err => {
                client.end()
                return err;
            })
    }

    static deleteExplorerById(tableName, id){
        const client = Connection.dataBaseConnection();
        client.connect();

        return client.query(`delete from ${tableName} e where e.id = ${id}`)
        .then(response => {
            client.end();
            return this.getAllTable(tableName);
        })
        .catch(err => {
            client.end();
            return err;
        });
    }

    static insertExplorerById(tableName, id){
        const client = Connection.dataBaseConnection();
        client.connect();

        return client.query(`insert into ${tableName}(id, username) values (${id}, 'Explorer${id}')`)
        .then(response => {
            client.end();
            return this.getAllTable(tableName);
        })
        .catch(err => {
            client.end();
            return err;
        });
    }
}

module.exports = DataBaseService;