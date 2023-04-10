import express from 'express';
import { createCate, getCate, getAllCate, removeCate, updateCate } from './../controllers/categorys';
// import { checkPermission } from '../middlewares/checkPermission';


const router = express.Router();


router.post("/categorys", createCate);
router.get("/categorys", getAllCate);
router.get("/categorys/:id", getCate);
router.delete("/categorys/:id", removeCate);
router.get("/categorys/:id" , updateCate);


export default router;