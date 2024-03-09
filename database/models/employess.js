import mongoose from "mongoose";
const { Schema } = mongoose;
import { cpfValidation } from "../../utils/cpfValidation.js";

const EmployeSchema = new Schema({

    id: { 
        type: mongoose.Schema.Types.ObjectId,
    } ,
    name: { 
        type: String,
        minLength: [3, 'The {PATH} must contain at least 3 characters'] , 
        required: '{PATH} is required',
        indexedDB: true
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
        required: '{PATH} is required',
    },
    imgSrc: {
        type: String,
        equired: '{PATH} is required',
    },
    tel: {
        type: String,
        required: '{PATH} is required',
    },
    occupation: {
        type: String,
        required: '{PATH} is required',
    },
    active: {
        type: Boolean,
        required: '{PATH} is required',
    },
}, { versionKey: false })

const Employess = mongoose.model('Employes', EmployeSchema);

export  { Employess, EmployeSchema};