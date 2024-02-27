import Services from "./Service.js";
import { Admin } from "../database/models/index.js"; 
import passwordHash from "../utils/hash.js";
import bcrypt from 'bcrypt'
import { createToken } from "../midllewares/auth.js";


class AdminServices extends Services {
    constructor(){
        super(Admin);
    }

    createTokenForAdmin = async(data) => {
        const admin = await Admin.findOne({email: data.email});

        if(bcrypt.compare(data.password, admin.password)){ 
            const token = await createToken(admin)

            return token
        }
    
    }

    encryptPassword = async(data) => {
        let passHash = await passwordHash(data.password);
        data.password = passHash;

        return Admin.create(data) ; 
    }

}


export default AdminServices;