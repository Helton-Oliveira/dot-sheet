import mongoose from "mongoose";
const { Schema } = mongoose;
import getRecordType from "../../utils/getRecordType.js";
import { dataFormatter, hoursFormatter} from "../../utils/formatterFunctions.js";
import { EmployeSchema } from "./employess.js"; 

const RegisterSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    date: { 
        type: String , default: dataFormatter
     },
     hours: {
        type: String, default: hoursFormatter
     },
     recordType: {
        type: String, default: getRecordType
     },

     employe: EmployeSchema ,
     
}, { versionKey: false })

const Register = mongoose.model('Register', RegisterSchema);

export default Register ;