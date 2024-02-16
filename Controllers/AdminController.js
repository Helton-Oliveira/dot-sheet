import Controller from "./Controller.js";
import AdminServices from "../Services/AdminServices.js";

const adminServices = new AdminServices;

class AdminController extends Controller {
    constructor() {
        super(adminServices);
    }
}

export default AdminController;