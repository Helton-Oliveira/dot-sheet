import mongoose from "mongoose";
const { Schema } = mongoose;
import getRecordType from "../../utils/getRecordType.js";
import { dataFormatter, hoursFormatter} from "../../utils/formatterFunctions.js";

const RegisterSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    employeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employes',
        require: true,
    },
    date: { 
        type: String , default: dataFormatter
     },
     hours: {
        type: String, default: hoursFormatter
     },
     recordType: {
        type: String, default: getRecordType
     }
})

const Register = mongoose.model('Register', RegisterSchema);

export default Register ;