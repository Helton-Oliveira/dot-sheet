import express from 'express';
import adminRoutes from './adminRoutes.js';
import employessRoutes from './employessRoutes.js';
import registerRoutes from './registersRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const swaggerPath = path.join(__dirname, '../swagger.json');
const swaggerDocs = JSON.parse(fs.readFileSync(swaggerPath))

const routes = (app) => {

    app.use(express.static(path.join(__dirname, '../views'))) 
    app.use('/uploads', express.static(path.join(__dirname, '../uploads')))
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
    
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*'); 
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next()
      });

    
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../views', 'index.html'));
    });

    app.use(express.json(), adminRoutes, employessRoutes, registerRoutes);

};

export default routes;
