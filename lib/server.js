const DataBaseController = require("./controllers/dataBaseController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Consult SQL Postgres DataBase"});
});

app.get("/v1/database/explorers", (request, response) => {
    const explorersInDatabase = DataBaseController.getAllTable();

    explorersInDatabase.then((res) => {
        response.json(res);
    });
});

app.get("/v1/database/explorers/:id", (request, response) => {
    const id = request.params.id;
    const explorerById = DataBaseController.getExplorerById(id);

    explorerById.then((res) => {
        response.json(res);
    });
});

app.get("/v1/database/explorers/insert/:id", (request, response) => {
    const id = request.params.id;
    const insertExplorer = DataBaseController.insertExplorerbyId(id);

    insertExplorer.then((res) => {
        response.json(res);
    });
});

app.get("/v1/database/explorers/delete/:id", (request, response) => {
    const id = request.params.id;
    const deleteExplorer = DataBaseController.deleteExplorerById(id);

    deleteExplorer.then((res) => {
        response.json(res);
    });
});

app.listen(port, () => {
    console.log(`DataBase API in localhost: ${port}`);
});