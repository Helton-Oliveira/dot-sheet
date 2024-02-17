import Controller from './Controller.js'
import RegisterServices from '../Services/RegisterServices.js'
import EmployessServices from '../Services/EmployessServices.js';

const registerServices = new RegisterServices();
const employeServices = new EmployessServices();

class RegisterController extends Controller {
    constructor() {
        super(registerServices)
    }

    createRegistrationWithEmployee = async(req, res, next) => {
        const data = req.body;
        
        try {
            const employe = await employeServices.getOne(data.employe);

            const fullRegister = { employe: {...employe}} ;

            const createdRegister = await registerServices.created(fullRegister);

            res.status(200).json(createdRegister);
            
        } catch (error) {
            console.error(error)
        }
    }

    registerFilter = async(req, res, next) => {
        try {
            const sucessQuery = await registerServices.listRecordsByFilter(req.query);

            res.status(200).json(sucessQuery);
        } catch (error) {
            console.error(error)
        }
    }

}

export default RegisterController;