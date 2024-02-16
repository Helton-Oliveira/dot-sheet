import Services from "./Service.js";
import { Day } from "../database/models/index.js"; 

class DayServices extends Services {
    constructor(){
        super(Day);
    }
}


export default DayServices;