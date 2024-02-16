import { Router } from 'express';
import DaysController from '../Controllers/DaysController.js';

const router = Router();
const dayController = new DaysController;

router.post('/day', dayController.create);


export default router;