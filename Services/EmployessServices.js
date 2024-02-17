import Services from "./Service.js";
import { Employess } from "../database/models/index.js"; 


class EmployessServices extends Services {
    constructor(){
        super(Employess);
    }
}


export default EmployessServices;