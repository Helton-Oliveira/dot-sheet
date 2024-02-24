import  express  from 'express';
import adminRoutes from './adminRoutes.js'
import employessRoutes from './employessRoutes.js'
import registerRoutes from './registersRoutes.js'

const routes = (app) => {

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    app.route('/').get((req, res) => {
        res.status(200).send('roando')
    })

    app.use(express.json(), adminRoutes, employessRoutes, registerRoutes);
}


export default routes