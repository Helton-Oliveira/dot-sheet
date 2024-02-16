import Controller from './Controller.js'
import DayServices from '../Services/DayServices.js';

const dayServices = new DayServices

class DaysController extends Controller {
    constructor() {
        super(dayServices)
    }
}

export default DaysController;