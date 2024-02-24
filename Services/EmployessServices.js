import Services from "./Service.js";
import { Employess } from "../database/models/index.js"; 


class EmployessServices extends Services {
    constructor(){
        super(Employess);
    }

    createFullEmployee = async(data) => {
        return Employess.create({...data})
    }
}


export default EmployessServices;