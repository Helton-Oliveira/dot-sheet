import Controller from './Controller.js'
import EmployessServices from '../Services/EmployessServices.js';
import toJson from '../utils/toJSON.js'

const employessServices = new EmployessServices

class EmployessController extends Controller {
    constructor() {
        super(employessServices)
    }

    completeEmployeeRegistration = async(req, res, next) => {
        const { file } = req; 
        const data = req.body.body

        try {

            const full = {
                employe: { 
                    ...JSON.parse(data),
                    imgSrc: file.path,
                }
            }
            console.log(full)
            const fullRegister = await employessServices.createFullEmployee(full.employe);

            res.status(200).json(fullRegister)
            
        } catch (error) {
            next(error)
        }
    }
}

export default EmployessController;