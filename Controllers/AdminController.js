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

    authAdmin = async(req, res, next) => {
        try {
            const token = await adminServices.createTokenForAdmin(req.body);
            console.log(token)
            res.status(200).json({token: token})
        } catch (error) {
            next(error)
        }
    }
}

export default AdminController;