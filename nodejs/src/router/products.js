import express from 'express';
import { createPro, getPro, getAllPro, removePro, updatePro } from './../controllers/products';
// import { checkPermission } from '../middlewares/checkPermission';


const router = express.Router();


router.post("/products", createPro);
router.get("/products", getAllPro);
router.get("/products/:id", getPro);
router.delete("/products/:id", removePro);
router.get("/products/:id" , updatePro);


export default router;