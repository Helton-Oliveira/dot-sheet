import { Router } from "express";
import AdminController from "../Controllers/AdminController.js";

const adminContoller = new AdminController;
const router = Router()

router.get('/admin', adminContoller.getAllRegister);
router.get('/admin/:name', adminContoller.getOneRegister);
router.post('/admin', adminContoller.create);
router.put('/admin/:name', adminContoller.toUpdated);
router.delete('admin/:name', adminContoller.deleted);


export default router; 