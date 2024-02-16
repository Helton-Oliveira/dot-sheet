import mongoose from "mongoose";
const { Schema } = mongoose;

const AdminSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { 
        type: String,
        require: [true, 'O campo name deve ser obrigatório' ]
    },
    cpf: {
        type: String,
        require: [true, 'O campo CPF deve ser obrigatório']
    }, 
    email: {
        type: String,
        require: [true, 'O campo email é obrigatório']
    },
    password: {
        type: String,
        require: [true, 'O campo password é obrigatório']
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
    }
})

const Admin = mongoose.model('Admin', AdminSchema);

export default Admin;