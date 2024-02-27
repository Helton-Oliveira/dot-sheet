import  express  from 'express';
import adminRoutes from './adminRoutes.js'
import employessRoutes from './employessRoutes.js'
import registerRoutes from './registersRoutes.js'
import path from 'path';



const routes = (app) => {

    const home = app.use('/home', express.static(path.join('index.html','../views/pages')))

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    app.route('/').get((req, res) => {
        res.status(200).sendFile(home)
        res.status(200).sendFile(faceApi)
        res.status(200).sendFile(recognition)
    })

    app.use(express.json(), adminRoutes, employessRoutes, registerRoutes);
}


export default routes