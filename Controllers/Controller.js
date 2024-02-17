class Controller {
    constructor(entityServices) {
        this.entityServices = entityServices
    }
    
    getAllRegister = async(req, res, next) => {
        try {
            const all = await this.entityServices.getAll()

            res.status(200).json(all)
        } catch (error) {
            console.error(error);
        }
    }

    getOneRegister = async (req, res, next) => {
        const { id } = req.params;

        try {
            const sucess = await this.entityServices.getOne(id);
            res.status(200).json(sucess);
        } catch (error) {
            console.log(error);
        }
    }

    create = async (req, res, next) => {
        const data = req.body;

        try {
            const sucess = await this.entityServices.created(data);
            res.status(200).json(sucess);
        } catch (error) {
            console.log(error);
        }
    }

    toUpdated = async(req, res, next) => {
        const { id } = req.params

        try {
            const updated = await this.entityServices.update(id, req.body);

            if(updated !== null) {
                res.status(200).json({msg: 'Alterado com sucesso'});
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    deleted = async(req, res, next) => {
        const { id } = req.params

        try {
            const DeleData = await this.entityServices.deleting(id);

            if(DeleData !== null) {
                res.status(200).json({msg: 'Deletado com sucesso'});
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    
}

export default Controller;