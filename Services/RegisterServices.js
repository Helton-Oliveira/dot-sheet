import Services from "./Service.js";
import { Register, Employess } from '../database/models/index.js'
import processQuery from "../utils/ProcessQuery.js";

class RegisterServices extends Services {
    constructor() {
        super(Register);
    }

    listRecordsByFilter = async(query) => {
        const sucess = await processQuery(query);

        if(sucess.employe !== undefined) {
            const employeeFound = await Employess.findOne({ name: {$regex: sucess.employe, $options: 'i'} });
            const registerFound = await Register.find({ ['employe._id']: employeeFound._id});
            return (registerFound);

        } else {    
            const foundDate = await Register.find({date: sucess.date})
            return foundDate

        }
        }
};

export default RegisterServices;