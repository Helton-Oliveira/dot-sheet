import { Router } from "express"; 
import RegisterController from "../Controllers/RegisterController.js";

const router = Router();
const registerController = new RegisterController();

router.get('/register', registerController.getAllRegister);
router.get('/register/:name', registerController.getOneRegister);
router.post('/register', registerController.create);
router.put('/register/:name', registerController.toUpdated);
router.delete('register/:name', registerController.deleted);



export default router