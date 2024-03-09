import  express  from "express";
import dbConnection from "./database/config/dbConfig.js";
import routes from "./routes/index.js";
import errorHandler from "./midllewares/errorHandler.js";
import handler404 from "./midllewares/handler404.js";

const connection = await dbConnection()

connection.on("error", (error) => {
    console.error('erro de conexão', error);
})

connection.once('open', () => {
    console.log('Conexão com o banco feita com sucesso');
})

const app = express();

routes(app);

app.use(errorHandler);

app.use(handler404);


 

export default app;

