import Services from "./Service.js";
import { Employess, Register } from "../database/models/index.js"; 


class EmployessServices extends Services {
    constructor(){
        super(Employess);
        this.registerServices = new Services(Register);
    }

    getAllRegisterPerEmploye = async(employeId) => {
        return this.registerServices.getOne(employeId);
    }
}


export default EmployessServices;