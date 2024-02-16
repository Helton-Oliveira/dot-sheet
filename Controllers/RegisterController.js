import Controller from './Controller.js'
import RegisterServices from '../Services/RegisterServices.js'

const registerServices = new RegisterServices();

class RegisterController extends Controller {
    constructor() {
        super(registerServices)
    }
}

export default RegisterController;