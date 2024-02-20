import Services from "./Service.js";
import { Register, Employess } from '../database/models/index.js'
import processQuery from "../utils/ProcessQuery.js";

class RegisterServices extends Services {
    constructor() {
        super(Register);
    }

    listRecordsByFilter = async(query) => {
        const sucess = await processQuery(query);

            if (sucess.employe !== undefined) {
                const employeFound = await Employess.find({name: sucess.employe})
                const filterPerEmploye = await Register.find({ employe: employeFound})
                return filterPerEmploye
            }

        const filter = await Register.find(sucess);
        return filter;
    }
};

export default RegisterServices;