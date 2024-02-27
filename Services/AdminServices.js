import Services from "./Service.js";
import { Admin } from "../database/models/index.js"; 
import passwordHash from "../utils/hash.js";


class AdminServices extends Services {
    constructor(){
        super(Admin);
    }

    encryptPassword = async(data) => {
        let passHash = await passwordHash(data.password);
        data.password = passHash;

        return Admin.create(data) ; 
    }

}


export default AdminServices;