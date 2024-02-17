import Controller from './Controller.js'
import EmployessServices from '../Services/EmployessServices.js';

const employessServices = new EmployessServices

class EmployessController extends Controller {
    constructor() {
        super(employessServices)
    }
}

export default EmployessController;