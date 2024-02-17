import { Router } from "express"; 
import RegisterController from "../Controllers/RegisterController.js";

const router = Router();
const registerController = new RegisterController();

router.get('/register', registerController.getAllRegister);
router.get('/register/q', registerController.registerFilter);
router.get('/register/:id', registerController.getOneRegister);
router.post('/register', registerController.createRegistrationWithEmployee);
router.put('/register/:id', registerController.toUpdated);
router.delete('/register/:id', registerController.deleted);



export default router