import express from "express";
import dbConnection from "./database/config/dbConfig.js";
import routes from "./routes/index.js";


const connection = await dbConnection()

connection.on("error", (error) => {
    console.error('erro de conexão', error);
})

connection.once('open', () => {
    console.log('Conexão com o banco feita com sucesso');
})

const app = express();

routes(app);

export default app;

