import { Router } from "express";
import AdminController from "../Controllers/AdminController.js";
import { verifyToken } from "../midllewares/auth.js"; 

const adminContoller = new AdminController;
const router = Router()


router.get('/admin', verifyToken, adminContoller.getAllRegister);
router.get('/admin/:id', verifyToken, adminContoller.getOneRegister);
router.post('/auth/admin', adminContoller.authAdmin)
router.post('/admin', verifyToken, adminContoller.createFullAdmin);
router.put('/admin/:id', verifyToken, adminContoller.toUpdated);
router.delete('/admin/:id', verifyToken, adminContoller.deleted);


export default router; 