import express from 'express';
import adminRoutes from './adminRoutes.js'
import dayRoutes from './dayRoutes.js'
import employessRoutes from './employessRoutes.js'
import registerRoutes from './registersRoutes.js'


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("Servidor Rodando")
    })

    app.use(express.json(), adminRoutes, employessRoutes, dayRoutes, registerRoutes);
}

export default routes