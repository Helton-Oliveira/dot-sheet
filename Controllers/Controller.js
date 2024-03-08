import NotFound from '../errors/NotFound.js'

class Controller {
    constructor(entityServices) {
        this.entityServices = entityServices
    }
    
    getAllRegister = async(req, res, next) => {
        try {
            const all = await this.entityServices.getAll();

            res.status(200).json(all)
        } catch (error) {
            next(error);
        }
    }

    getOneRegister = async (req, res, next) => {
        const { id } = req.params;

        try {
            const sucess = await this.entityServices.getOne(id);
            
        if(sucess !== null) {  
            res.status(200).json(sucess);

        } else {
            next( new NotFound() );
        }

        } catch (error) {
            next(error);
        }
    }

    create = async (req, res, next) => {
        const data = req.body;

        try {
            const sucess = await this.entityServices.created(data);
            res.status(200).json(sucess);
        } catch (error) {
            next(error);
        }
    }

    toUpdated = async(req, res, next) => {
        const { id } = req.params

        try {
            const updated = await this.entityServices.update(id, req.body);

            if(updated !== null) {
                res.status(200).json({msg: 'Alterado com sucesso'});
            } else {
                next(new NotFound());
            }
            
        } catch (error) {
            next(error);
        }
    }

    deleted = async(req, res, next) => {
        const { id } = req.params

        try {
            const deleData = await this.entityServices.deleting(id);

            if(deleData !== null) {
                res.status(200).json({msg: 'Deletado com sucesso'});
            } else {
                next(new NotFound());
            }
        } catch (error) {
            next(error);
        }
    }

    
}

export default Controller;