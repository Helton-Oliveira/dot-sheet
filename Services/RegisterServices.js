import Services from "./Service.js";
import { Register, Employess } from '../database/models/index.js'
import processQuery from "../utils/ProcessQuery.js";

class RegisterServices extends Services {
    constructor() {
        super(Register);
    }

    listRecordsByFilter = async(query) => {
        const filter = await processQuery(query, Employess);

        const sucess = await Register.find({ ...filter });
        
        return sucess
    }
};

export default RegisterServices;