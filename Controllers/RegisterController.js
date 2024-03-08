import Controller from './Controller.js'
import RegisterServices from '../Services/RegisterServices.js'
import EmployessServices from '../Services/EmployessServices.js';
import NotFound from '../errors/NotFound.js';
import emailServices from '../utils/emailServices.js';

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

            if( employe !== null) {
                const fullRegister = { employe: {...employe}} ;
                const createdRegister = await registerServices.created(fullRegister);
                res.status(200).json(createdRegister); 
            } 
        } catch (error) {
            next(new NotFound('User not found, please enter a valid user'))
        }
    }

    registerFilter = async(req, res, next) => {
        try {
            const sucessQuery = await registerServices.listRecordsByFilter(req.query);

            if(sucessQuery.length > 0) {
                res.status(200).json(sucessQuery);
            } else {
                next(new NotFound('Error, please enter a valid filter'))
            }


        } catch (error) {
            console.log(error)
            next(error);
        }
    }

    recognitionRegister = async(req, res, next) => {
        const data = req.body;
        try {
            const employe = await employeServices.searchEmployeByName(data);

            if(employe !== null) {
                const fullRegister = { employe: {...employe}} ;
                const createdRegister = await registerServices.created(fullRegister);
                res.status(200).json(createdRegister); 

                const sendEmail = await emailServices(employe, createdRegister)

                console.log(sendEmail)
            }

            


        } catch (error) {
            next(error)
        }
    }
}

export default RegisterController;