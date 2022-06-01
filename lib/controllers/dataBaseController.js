const DataBaseService = require("./../services/dataBaseService");

class DataBaseController{

    static getAllTable(){
        const tableName = "explorers";
        return DataBaseService.getAllTable(tableName);
    }

    static getExplorerById(id){
        const tableName = "explorers";
        return DataBaseService.getExplorerById(tableName, id);
    }

    static insertExplorerbyId(id){
        const tableName = "explorers";
        return DataBaseService.insertExplorerById(tableName, id);
    }

    static deleteExplorerById(id){
        const tableName = "explorers";
        return DataBaseService.deleteExplorerById(tableName, id);
    }

}

module.exports = DataBaseController;