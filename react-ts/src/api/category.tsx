import { ICategory } from "../interfaces/category";
import instance from "./instance";

const { accessToken } = JSON.parse(localStorage.getItem('user')!);

export const GetAllCate = () => {
    return instance.get("/categorys")
};

export const GetCate = (_id: number | string) => {
    return instance.get("/categorys/" + _id)
}

export const AddCate = (category: ICategory) => {
    return instance.post("/categorys", category)
}

export const RemoveCate = (_id: number | string) => {
    console.log(accessToken);
    
    return instance.delete("/categorys/" + _id, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

export const UpdateCate = (category: ICategory) => {
    return instance.put("/categorys/" + category._id, category)
}