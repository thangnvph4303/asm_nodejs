import jwt from 'jsonwebtoken'
import User from '../models/user'

export const checkPermission = async (req, res, next) => {
    try {
        if(!req.headers.authorization) {
            return res.status(400).json({
                message: "Bạn chưa đăng nhập"
            })
        };

        const token = req.headers.authorization.split("")[1];

        const { _id } = jwt.verify(token, "banThayDat");

        const user = await User.findById(_id);

        if(user.role != "admin") {
            return res.status(400).json({
                message: "Bạn không có quyền truy cập tài nguyên này"
            })
        };

        next();
    } catch (error) {
        
    }
}