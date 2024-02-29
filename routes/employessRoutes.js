import { Router } from 'express';
import EmployessController from '../Controllers/EmployessControllers.js';
import upload from '../midllewares/multer.js';
import { verifyToken } from '../midllewares/auth.js'; 



const router = Router();
const employessController = new EmployessController;

router.get('/employe',  employessController.getAllRegister);
router.get('/employe/:id', verifyToken, employessController.getOneRegister);
router.post('/employe', verifyToken, upload.single('file'), employessController.completeEmployeeRegistration);
router.put('/employe/:name', verifyToken, employessController.toUpdated);
router.delete('/employe/:name', verifyToken, employessController.deleted);


export default router;