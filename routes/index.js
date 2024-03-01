import express from 'express';
import adminRoutes from './adminRoutes.js';
import employessRoutes from './employessRoutes.js';
import registerRoutes from './registersRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = (app) => {

    app.use(express.static(path.join(__dirname, '../views')))
    app.use((req, res, next) => {
        res.setHeader('Content-Security-Policy', "script-src 'self'");
        next();
    });
    app.use('/uploads', express.static(path.join(__dirname, '../uploads')))
    

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    app.get('/', (req, res) => {
        res.send(path.join(__dirname, '../views', 'index.html'));
    });

    app.use(express.json(), adminRoutes, employessRoutes, registerRoutes);
};

export default routes;
