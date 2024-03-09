import mongoose from "mongoose";
const { Schema } = mongoose;
import { cpfValidation } from "../../utils/cpfValidation.js";

const AdminSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { 
        type: String,
        minLength: [3, 'The {PATH} must contain at least 3 characters'] , 
        required: '{PATH} is required',
    },
    cpf: {
        type: String,
        required: '{PATH} is required',
        validate: {
            validator: (value) => { if (!cpfValidation(value)) throw new Error('{PATH} not valid') }
        } 
    }, 
    email: {
        type: String,
        required: '{PATH} is required' 
    },
    password: {
        type: String,
        required: '{PATH} is required',
        minLength: [6, 'The {PATH} must contain at least 6 characters'],
    },
    tel: {
        type: String,
        required: '{PATH} is required'  
    },
    occupation: {
        type: String,
        required: '{PATH} is required' 
    },
    active: {
        type: Boolean,
        required: '{PATH} is required' 
    }
})

const Admin = mongoose.model('Admin', AdminSchema);

export default Admin;