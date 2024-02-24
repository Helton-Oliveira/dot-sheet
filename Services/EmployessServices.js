import Services from "./Service.js";
import { Employess } from "../database/models/index.js"; 


class EmployessServices extends Services {
    constructor(){
        super(Employess);
    }

    createFullEmployee = async(data) => {
        return Employess.create({...data})
    }

    searchEmployeByName = async(data) => {
        return Employess.findOne({ ...data})
    }
}


export default EmployessServices;