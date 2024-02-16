import Services from "./Service.js";
import { Admin } from "../database/models/index.js"; 


class AdminServices extends Services {
    constructor(){
        super(Admin);
    }
}


export default AdminServices;