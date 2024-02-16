import mongoose from "mongoose";
const { Schema } = mongoose;

const EmployeSchema = new Schema({

    id: { type: mongoose.Schema.Types.ObjectId },
    name: { 
        type: String,
        require: [true, 'O campo name deve ser obrigatório' ],
        indexedDB: true
    },
    cpf: {
        type: String,
        require: [true, 'O campo CPF deve ser obrigatório']
    }, 
    email: {
        type: String,
        require: [true, 'O campo email é obrigatório']
    },
    tel: {
        type: String,
        require: [true, 'O campo tel é obrigatório']
    },
    occupation: {
        type: String,
        require: [true, 'O campo occupation é obrigatório']
    },
    active: {
        type: Boolean,
        require: [true, 'O campo active é obrigatório.']
    },
})

const Employess = mongoose.model('Employes', EmployeSchema);

export default Employess;