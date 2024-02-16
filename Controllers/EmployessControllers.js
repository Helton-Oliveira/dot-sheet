import Controller from './Controller.js'
import EmployessServices from '../Services/EmployessServices.js';

const employessServices = new EmployessServices

class EmployessController extends Controller {
    constructor() {
        super(employessServices)
    }

    getAllRegisterEmploye = async(req, res, next) => {
        const employeId = req.params;

        const allRegisters = await employessServices.getAllRegisterPerEmploye(employeId);
        
        res.status(200).json(allRegisters);
    }
}

export default EmployessController;