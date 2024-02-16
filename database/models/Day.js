import mongoose from "mongoose";
const { Schema } = mongoose;

const DaySchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    employe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employes',
        require: true,
    },
    afternoonDeparture: {
        type: String,
    },
    entranceAfternoon: {
        type: String,
    },
    exit: {
        type: String,
    },
}, {
    timestamps: {
        createdAt: 'start',
    }
})

// DaySchema.set('timestamps', true)

const Day = mongoose.model('Day', DaySchema);
export default Day ;