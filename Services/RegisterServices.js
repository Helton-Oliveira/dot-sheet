import Services from "./Service.js";
import { Register } from '../database/models/index.js'

class RegisterServices extends Services {
    constructor() {
        super(Register);
    }
};

export default RegisterServices;