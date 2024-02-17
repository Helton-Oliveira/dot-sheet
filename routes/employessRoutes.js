import { Router } from 'express';
import EmployessController from '../Controllers/EmployessControllers.js';

const router = Router();
const employessController = new EmployessController;

router.get('/employe', employessController.getAllRegister);
router.get('/employe/:id', employessController.getOneRegister);
router.post('/employe', employessController.create);
router.put('/employe/:name', employessController.toUpdated);
router.delete('employe/:name', employessController.deleted);


export default router;