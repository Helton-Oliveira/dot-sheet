import { Router } from "express"; 
import RegisterController from "../Controllers/RegisterController.js";
import { verifyToken } from "../midllewares/auth.js"; 

const router = Router();
const registerController = new RegisterController();

router.get('/register', verifyToken, registerController.getAllRegister);
router.get('/register/q', verifyToken, registerController.registerFilter);
router.get('/register/:id', verifyToken, registerController.getOneRegister);
router.post('/register', verifyToken, registerController.createRegistrationWithEmployee);
router.post('/register/rec', registerController.recognitionRegister);
router.put('/register/:id', verifyToken, registerController.toUpdated);
router.delete('/register/:id', verifyToken, registerController.deleted);



export default router