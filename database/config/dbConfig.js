import mongoose from "mongoose";

async function dbConnection() {
    mongoose.connect(process.env.DB_CONNECTION__STRING); 

    return mongoose.connection;
}

export default dbConnection;