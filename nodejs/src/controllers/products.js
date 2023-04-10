import Product from '../models/products';
import joi from 'joi';
// import axios from 'axios'


const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    image: joi.string(),
    desc: joi.string(),
    cate_id: joi.string(),
});

export const createPro = async (req, res) => {
    try {
        /*const body = req.body*/
        const {error} = productSchema.validate(req.body);
        if(error){
            const errors = error.details.map((errorItem) => errorItem.message)
            return res.json({
                message: errors
            })
        }
        const product = await Product.create(req.body);
        if(!product){
            return res.status(400).json({
                message: "Thêm sản phẩm thất bại"
            })
        }
        return res.status(200).json({
            message: "Thêm thành công",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}


export const getAllPro = async (req, res) => {
    try {
        const products = await Product.find();
        if(products.length === 0){
            return res.status(400).json({
                message: "Không có sản phẩm nào"
            })
        }
        return res.status(200).json(products)
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}



export const getPro = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!data) {
            return res.status(400).json({ message: "Không có sản phẩm nào" });
        }
        return res.status(200).json(product)
    } catch (error) {
        return res.status(400).json({
            message: error,
        })
    }
}



export const removePro = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({_id: req.params.id});
        return res.status(200).json({
            message: "Xóa thành công",
            product,
        })
    } catch (error) {
        return res.json({
            message: error,
        })
    }
}



export const updatePro = async (req, res) => {
    try {
        const {error} = productSchema.validate(req.body);
        if(error){
            return res.json({
                message: error.details[0].message
            })
        }
        const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, { new: true });
        if (!product) {
            return res.status(400).json({ message: "Cập nhật thất bại" });
        }
        return res.status(200).json({
            message: "Cập nhật thành công",
            product,
        })
    } catch (error) {
        return res.json({
            message: error,
        })
    }
}