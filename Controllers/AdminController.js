import Controller from "./Controller.js";
import AdminServices from "../Services/AdminServices.js";

const adminServices = new AdminServices;

class AdminController extends Controller {
    constructor() {
        super(adminServices);
    }

    createFullAdmin = async(req, res, next) => {

        try {
            
            const encrypt = await adminServices.encryptPassword(req.body)      
            res.status(200).json(encrypt)    

        } catch (error) {
            next(error)
        }
    }
}

export default AdminController;