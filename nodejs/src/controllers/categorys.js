import Category from '../models/category';
import joi from 'joi';
// import axios from 'axios'


const CateSchema = joi.object({
    name: joi.string().required(),
});

export const createCate = async (req, res) => {
    try {
        /*const body = req.body*/
        const {error} = CateSchema.validate(req.body);
        if(error){
            const errors = error.details.map((errorItem) => errorItem.message)
            return res.json({
                message: errors
            })
        }
        const category = await Category.create(req.body);
        if(!category){
            return res.status(400).json({
                message: "Thêm sản phẩm thất bại"
            })
        }
        return res.status(200).json({
            message: "Thêm thành công",
            category,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}


export const getAllCate = async (req, res) => {
    try {
        const categorys = await Category.find();
        if(categorys.length === 0){
            return res.status(400).json({
                message: "Không có sản phẩm nào"
            })
        }
        return res.status(200).json(categorys)
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}



export const getCate = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!data) {
            return res.status(400).json({ message: "Không có sản phẩm nào" });
        }
        return res.status(200).json(category)
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}



export const removeCate = async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({_id: req.params.id});
        return res.status(200).json({
            message: "Xóa thành công",
            category,
        })
    } catch (error) {
        return res.json({
            message: error,
        })
    }
}



export const updateCate = async (req, res) => {
    try {
        const {error} = CateSchema.validate(req.body);
        if(error){
            return res.json({
                message: error.details[0].message
            })
        }
        const category = await Category.findOneAndUpdate({_id: req.params.id}, req.body, { new: true });
        if (!category) {
            return res.status(400).json({ message: "Cập nhật thất bại" });
        }
        return res.status(200).json({
            message: "Cập nhật thành công",
            category,
        })
    } catch (error) {
        return res.json({
            message: error,
        })
    }
}